from django.urls import path, include
from rest_framework import routers

from .views import ArtObjectViewSet

router_v1 = routers.DefaultRouter()
router_v1.register("product", ArtObjectViewSet, basename="product")

urlpatterns = [
    path("", include(router_v1.urls)),
]
