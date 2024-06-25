from rest_framework import routers
from django.urls import path, include

from .views import AnalyticsViewSet

analytics_router_v1 = routers.DefaultRouter()
analytics_router_v1.register(
    "analytics", AnalyticsViewSet, basename="analytics"
)

urlpatterns = [path("", include(analytics_router_v1.urls))]
