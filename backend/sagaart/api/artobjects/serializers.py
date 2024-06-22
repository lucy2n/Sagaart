from rest_framework import serializers

from artobjects.models import (
    Category,
    Genre,
    Style,
    Product,
    Author,
    AuthorAward,
    AuthorShow,
)


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
        fields = "__all__"


class AuthorShowSerializer(serializers.ModelSerializer):
    class Meta:
        model = AuthorShow
        fields = "__all__"


class FullAuthorInfoSerializer(serializers.ModelSerializer):
    awards = AuthorAwardSerializer(read_only=True, many=True)
    show = AuthorShowSerializer(read_only=True, many=True)

    class Meta:
        model = Author
        fields = (
            "id",
            "name",
            "gender",
            "age",
            "year_of_birth",
            "show",
            "awards",
            "city_of_birth",
            "city_live",
            "education",
            "professional_education",
            "teaching_experience",
            "personal_style",
            "socials",
        )


class AuthorNameSerializer(serializers.ModelSerializer):
    class Meta:
        model = Author
        fields = ("id", "name")


class ArtObjectListSerialzer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True, many=True)
    style = GenreSerializer(many=True, read_only=True)
    genre = StyleSerializer(many=True, read_only=True)
    author = AuthorNameSerializer(read_only=True)

    class Meta:
        model = Product
        fields = (
            "id",
            "name",
            "image",
            "additional_image",
            "category",
            "style",
            "genre",
            "size_category",
            "size",
            "country",
            "city_sale",
            "year",
            "material",
            "tablet_material",
            "cost_category",
            "end_cost",
            "fair_cost",
            "author",
        )


class ArtObjectSerialzer(ArtObjectListSerialzer):
    author = FullAuthorInfoSerializer(read_only=True)

    class Meta(ArtObjectListSerialzer.Meta):
        fields = (
            "id",
            "name",
            "image",
            "additional_image",
            "category",
            "style",
            "genre",
            "size_category",
            "size",
            "country",
            "city_sale",
            "year",
            "material",
            "tablet_material",
            "description",
            "cost_category",
            "end_cost",
            "fair_cost",
            "author",
        )
