from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets, permissions, filters
from rest_framework.decorators import action

from artobjects.models import Product, Category, Genre, Style
from .serializers import (
    ArtObjectSerialzer,
    ArtObjectListSerialzer,
    CategorySerializer,
    GenreSerializer,
    StyleSerializer,
)
from api.filters import ArtObjFilter


class CategoryViewSet(viewsets.ReadOnlyModelViewSet):
    model = Category
    serializer_class = CategorySerializer


class GenreViewSet(viewsets.ReadOnlyModelViewSet):
    model = Genre
    serializer_class = GenreSerializer


class StyleViewSet(viewsets.ReadOnlyModelViewSet):
    model = Style
    serializer_class = StyleSerializer


# class ArtObjectViewSet(viewsets.ModelViewSet):
#     models = Product
#     serializer_class = ArtObjectSerialzer


class ArtObjectViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = Product.objects.filter(is_published=True)
    serializer_class = ArtObjectSerialzer
    permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
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


    # @action(
    #         detail=True,
    #         methods=['post', 'delete'],
    #         url_path='terms/(?P<terms_id>\d+)/subscribe'
    #     )
    # def subscribe(self, request, pk=None, terms_id=None):
    #     user = request.user
    #     service = get_object_or_404(Service, pk=pk)
    #     terms = get_object_or_404(Terms, pk=terms_id, service=service)
    #     bank_card = ArtObject.objects.filter(name=name).first()

    #     if not bank_card:
    #         return Response(
    #             {
    #                 'errors': 'У пользователя нет банковской'
    #                 'карты для привязки к подписке.'
    #             },
    #             status=status.HTTP_400_BAD_REQUEST
    #         )

    #     if request.method == 'POST':
    #         return handle_subscribe_post(
    #             request,
    #             user,
    #             service,
    #             terms,
    #             bank_card
    #         )

    #     elif request.method == 'DELETE':
    #         return handle_subscribe_delete(user, service, terms)
