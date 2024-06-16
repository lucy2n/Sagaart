import requests
from django.http import request
from rest_framework import viewsets, mixins
from rest_framework.decorators import action


from analytics.models import User
from .serializers import UserAnalyticsSerializer


class UserAnalyticsViewSet(
    mixins.ListModelMixin, mixins.RetrieveModelMixin, viewsets.GenericViewSet
):
    queryset = User.objects.all()
    serializer_class = UserAnalyticsSerializer


class AnalyticsViewSet(mixins.CreateModelMixin, viewsets.GenericViewSet):
    queryset = ...
    serializer_class = ...
    permission_classes = (...,)

    @action(methods=["POST"], detail=False)
    def request_analytics(self, request):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        payload = serializer.data
        response = requests.post("<algorythm-url>", data=payload)
