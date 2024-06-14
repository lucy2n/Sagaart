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


class ArtObjectSerialzer(serializers.ModelSerializer):
    pass
