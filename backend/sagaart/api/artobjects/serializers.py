from rest_framework import serializers

from artobjects.models import (
    Category,
    Genre,
    Style,
    ArtObject,
    ObjectAuthor,
)


class CategorySerializer(serializers.ModelSerializer):
    pass


class GenreSerializer(serializers.ModelSerializer):
    pass


class StyleSerializer(serializers.ModelSerializer):
    pass


class ObjectAuthorSerializer(serializers.ModelSerializer):
    pass


class ArtObjectListSerialzer(serializers.ModelSerializer):
    class Meta:
        model = ArtObject
        fields = [
            'id', 'image', 'category', 'style', 'genre', 'size',
            'size_category', 'year', 'sale_city', 'material', 'tablet_material',
            'cost_category', 'end_cost', 'fair_cost'
        ]


class ArtObjectSerialzer(serializers.ModelSerializer):
    class Meta:
        model = ArtObject
        fields = [
            'image', 'category', 'style', 'genre', 'size',
            'size_category', 'year', 'sale_city', 'material', 'tablet_material',
            'cost_category', 'end_cost', 'fair_cost'
        ]
