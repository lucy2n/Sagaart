import base64
from django.core.files.base import ContentFile
from rest_framework import serializers

from artobjects.models import (
    Category,
    Genre,
    Style,
    ArtObject,
    ObjectAuthor,
    AuthorAward,
    AuthorShow
)



class Base64ImageField(serializers.ImageField):
    def to_internal_value(self, data):
        if isinstance(data, str) and data.startswith('data:image'):
            format, imgstr = data.split(';base64,')
            ext = format.split('/')[-1]
            data = ContentFile(base64.b64decode(imgstr), name='photo.' + ext)
        return super().to_internal_value(data)


class CategorySerializer(serializers.ModelSerializer):


    class Meta:
        model = Category
        fields = ("id", "name")


class GenreSerializer(serializers.ModelSerializer):

    class Meta:
        model = Genre
        fields = ("id", "name")


class StyleSerializer(serializers.ModelSerializer):

    class Meta:
        model = Style
        fields = ("id", "name")


class AuthorAwardSerializer(serializers.ModelSerializer):

    class Meta:
        model = AuthorAward
        fields = ("id", "name")


class AuthorShowSerializer(serializers.ModelSerializer):

    class Meta:
        model = AuthorShow
        fields = ("id", "name", "year", "place")


class ObjectAuthorSerializer(serializers.ModelSerializer):
    awards = AuthorAwardSerializer(read_only=True, many=True)
    show = AuthorShowSerializer(read_only=True, many=True)

    class Meta:
        model = ObjectAuthor
        fields = (
            "id", "name", "gender", "age", "year_of_birth", "show", "awards",
            "city_of_birth", "city", "education", "professional_education",
            "teaching_experience", "personal_style", "socials"
        )


class AuthorNameSerializer(serializers.ModelSerializer):

    class Meta:
        model = ObjectAuthor
        fields = ("id", "name")


class ProductImageSerializer(serializers.ModelSerializer):
    image = Base64ImageField()

    class Meta:
        model = ArtObject
        fields = ("id", "image")



class ArtObjectListSerialzer(serializers.ModelSerializer):
    image = Base64ImageField()
    additional_image = Base64ImageField(required=False, allow_null=True)
    category = CategorySerializer(read_only=True, many=True)
    style = GenreSerializer(many=True, read_only=True)
    genre = StyleSerializer(many=True, read_only=True)
    author = AuthorNameSerializer(read_only=True)

    class Meta:
        model = ArtObject
        fields = (
            "id", "name", "image", "additional_image", "category", "style",
            "genre", "size_category", "size", "country", "city_sale", "year",
            "material", "tablet_material", "cost_category", "end_cost",
            "fair_cost", "author"
        )


class ArtObjectSerialzer(ArtObjectListSerialzer):
    author = ObjectAuthorSerializer(read_only=True)
    similar_works = serializers.SerializerMethodField()

    class Meta:
        model = ArtObject
        fields = (
            "id", "name", "image", "additional_image", "category", "style",
            "genre", "size_category", "size", "country", "city_sale", "year",
            "material", "tablet_material", "description", "cost_category",
            "end_cost", "fair_cost", "author", "similar_works"
        )

    def get_similar_works(self, obj):
        genre = obj.genre.get()
        similar_works = ArtObject.objects.filter(genre__name=genre).exclude(pk=obj.id)[:3]

        if similar_works:
            serializer = ProductImageSerializer(
                similar_works,
                context={'request': self.context['request']},
                many=True,
            )
            return serializer.data

        return []
