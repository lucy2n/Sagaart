from rest_framework import viewsets, mixins, permissions


from analytics.models import Analytics, User
from .serializers import AnalyticsSerializer


class AnalyticsViewSet(
    mixins.ListModelMixin,
    mixins.RetrieveModelMixin,
    mixins.CreateModelMixin,
    viewsets.GenericViewSet,
):
    queryset = Analytics.objects.all()
    serializer_class = AnalyticsSerializer
    permission_classes = (permissions.IsAuthenticated,)

    def perform_create(self, serializer):
        serializer.save(analytics_owner=self.request.user)
