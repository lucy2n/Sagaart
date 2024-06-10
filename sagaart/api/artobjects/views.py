from rest_framework import viewsets

from sagaart.artobjects.models import ArtObject, Category, Genre, Style


class CategoryViewSet(viewsets.ModelViewSet):
    model = Category
    serializer_class = ...


class GenreViewSet(viewsets.ModelViewSet):
    model = Genre
    serializer_class = ...


class StyleViewSet(viewsets.ModelViewSet):
    model = Style
    serializer_class = ...


class ArtObjectViewSet(viewsets.ModelViewSet):
    models = ArtObject
    serializer_class = ...
