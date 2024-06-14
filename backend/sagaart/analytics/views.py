from rest_framework import viewsets, mixins


class AnalyticsViewSet(mixins.ListModelMixin, mixins.CreateModelMixin, viewsets.GenericViewSet):
    queryset = ...
    serializer_class = ...
    permission_classes = (...,)
