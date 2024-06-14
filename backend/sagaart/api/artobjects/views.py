from rest_framework import viewsets

from artobjects.models import ArtObject, Category, Genre, Style
from .serializers import (
    ArtObjectSerialzer,
    CategorySerializer,
    GenreSerializer,
    StyleSerializer,
)


class CategoryViewSet(viewsets.ModelViewSet):
    model = Category
    serializer_class = CategorySerializer


class GenreViewSet(viewsets.ModelViewSet):
    model = Genre
    serializer_class = GenreSerializer


class StyleViewSet(viewsets.ModelViewSet):
    model = Style
    serializer_class = StyleSerializer


class ArtObjectViewSet(viewsets.ModelViewSet):
    models = ArtObject
    serializer_class = ArtObjectSerialzer
