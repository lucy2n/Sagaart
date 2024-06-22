import requests
from django.http import request
from rest_framework import viewsets, mixins, permissions
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework.views import status


from analytics.models import Analytics, User
from .serializers import (
    AnalyticSerializerForRead,
    AnalyticSerializerForWrite,
    AnalyticsRequestSerializer,
    UserAnalyticsSerializer,
)


class UserAnalyticsViewSet(
    mixins.ListModelMixin, mixins.RetrieveModelMixin, viewsets.GenericViewSet
):
    queryset = User.objects.all()
    serializer_class = UserAnalyticsSerializer


class AnalyticsViewSet(
    mixins.ListModelMixin, mixins.CreateModelMixin, viewsets.GenericViewSet
):
    queryset = Analytics.objects.all()
    serializer_class = AnalyticSerializerForRead
    # TODO: Заменить пермишн по готовности
    permission_classes = (permissions.AllowAny,)

    def perform_create(self, serializer):
        serializer.save(recepient=self.request.user)

    def get_serializer_class(self):
        if self.request.method not in permissions.SAFE_METHODS:
            return AnalyticSerializerForWrite
        return AnalyticSerializerForRead

    def get_queryset(self):
        queryset = Analytics.objects.filter(recepient=self.request.user.id)
        return queryset

    @action(methods=["POST"], detail=False)
    def request_analytics(self, request):
        serializer = AnalyticSerializerForWrite(data=request.data)
        serializer.is_valid(raise_exception=True)
        # payload = serializer.data
        serializer.save()
        # analysis_result = requests.post("https://<algorithm-url>", data=payload)
        # data = analysis_result.json()
        # data["recepient"] = self.request.user
        # serialized_analysis = AnalyticSerializerForWrite(data=data)
        # serialized_analysis.is_valid(raise_exception=True)
        # serialized_analysis.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
