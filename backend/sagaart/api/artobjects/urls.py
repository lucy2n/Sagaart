from django.urls import path, include
from rest_framework import routers

from .views import ArtObjectViewSet
from api.auth.views import UserViewSet

router_v1 = routers.DefaultRouter()
router_v1.register("items", ArtObjectViewSet, basename="items")
router_v1.register("user", UserViewSet)


urlpatterns = [
    path('user/', include('djoser.urls.authtoken')),
    path("", include(router_v1.urls)),
]
