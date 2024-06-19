from rest_framework import viewsets

from artobjects.models import ArtObject, Category, Genre, Style
from .serializers import (
    ArtObjectSerialzer,
    ArtObjectListSerialzer,
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


class ArtObjectViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = ArtObject.objects.all()
    serializer_class = ArtObjectSerialzer
    # filter_backends = [DjangoFilterBackend, OrderingFilter, SearchFilter]
    # search_fields = ['name']
    # filterset_class = ServiceFilter
    ordering_fields = [
        "id",
    ]

    def get_serializer_class(self):
        if self.action == "list":
            return ArtObjectListSerialzer
        elif self.action == "retrieve":
            return ArtObjectSerialzer
        return super().get_serializer_class()
