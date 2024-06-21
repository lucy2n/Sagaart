from rest_framework import serializers

from artobjects.models import (
    Category,
    Genre,
    Style,
    Product,
    Author,
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


class ObjectAuthorSerializer(serializers.ModelSerializer):

    class Meta:
        model = Author
        fields = ("__all__")


class ArtObjectListSerialzer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True, many=True)
    style = GenreSerializer(many=True, read_only=True)
    genre = StyleSerializer(many=True, read_only=True)
    author = ObjectAuthorSerializer(read_only=True)

    class Meta:
        model = Product
        fields = [
            "id", "name", "image", "category", "style", "genre", "size",
            "size_category", "year", "city_sale", "material", "tablet_material",
            "cost_category", "end_cost", "fair_cost", "author"

        ]


class ArtObjectSerialzer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)
    genre = GenreSerializer(read_only=True)

    class Meta:
        model = Product
        fields = [
            "id", "name", "image", "category", "style", "genre", "size",
            "size_category", "year", "city_sale", "material", "tablet_material",
            "cost_category", "end_cost", "fair_cost"
        ]
