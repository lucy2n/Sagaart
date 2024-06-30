from rest_framework import viewsets, mixins, permissions
import numpy as np
from catboost import CatBoostRegressor

from analytics.models import Analytics, User
from .serializers import (
    AnalyticsSerializerForRead,
    AnalyticsSerializerForWrite,
    AnalyticsListSerializer,
)
from .Paintings_v2 import preprocess

model = CatBoostRegressor()
model.load_model("api/analytics/catboost_v1.json", format="json")


class AnalyticsViewSet(
    mixins.ListModelMixin,
    mixins.RetrieveModelMixin,
    mixins.CreateModelMixin,
    viewsets.GenericViewSet,
):
    queryset = Analytics.objects.all()
    serializer_class = AnalyticsSerializerForRead
    permission_classes = (permissions.IsAuthenticated,)

    def get_queryset(self):
        queryset = Analytics.objects.filter(analytics_owner=self.request.user)
        return queryset

    def get_serializer_class(self):
        if self.request.method not in permissions.SAFE_METHODS:
            return AnalyticsSerializerForWrite
        if self.action == "list":
            return AnalyticsListSerializer
        return AnalyticsSerializerForRead

    def perform_create(self, serializer):
        data = [
            serializer.validated_data["category"],
            serializer.validated_data["year"],
            serializer.validated_data["height"],
            serializer.validated_data["width"],
            serializer.validated_data["material"],
            serializer.validated_data["tablet_material"],
            np.NaN,
            np.NaN,
            serializer.validated_data["birth_country"],
            serializer.validated_data["gender"],
            serializer.validated_data["solo_show"],
            serializer.validated_data["group_show"],
            serializer.validated_data["birth_year"],
            np.NaN,
        ]
        serializer.save(
            analytics_owner=User.objects.get(id=1),
            calculated_price=np.clip(
                model.predict(preprocess(data)), 1000, np.inf
            ),
        )
