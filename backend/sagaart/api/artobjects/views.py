from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets, permissions, filters

from artobjects.models import ArtObject
from .serializers import (
    ArtObjectSerialzer,
    ArtObjectListSerialzer
)
from api.filters import ArtObjFilter
from api.pagination import ArtObjectsPagination


class ArtObjectViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = ArtObject.objects.filter(is_published=True)
    serializer_class = ArtObjectSerialzer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    pagination_class = ArtObjectsPagination
    filter_backends = (DjangoFilterBackend, filters.SearchFilter, filters.OrderingFilter)
    filterset_class = ArtObjFilter
    search_fields = ('=name',)
    ordering_fields = ("id",)

    def get_serializer_class(self):
        if self.action == 'list':
            return ArtObjectListSerialzer
        elif self.action == 'retrieve':
            return ArtObjectSerialzer
        return super().get_serializer_class()
