from rest_framework import routers
from django.urls import path, include

from .views import AnalyticsViewSet, SubscriptionView

analytics_router_v1 = routers.DefaultRouter()
analytics_router_v1.register(
    "analytics", AnalyticsViewSet, basename="analytics"
)

urlpatterns = [
    path("product/", include(analytics_router_v1.urls)),
    path("user/<int:pk>/subscribe", SubscriptionView.as_view()),
]
