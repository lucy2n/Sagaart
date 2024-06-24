from rest_framework.pagination import PageNumberPagination


class ArtObjectsPagination(PageNumberPagination):
    page_size = 12
