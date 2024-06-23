from django.urls import path, include
from rest_framework import routers

from .views import UserViewSet

user_router_v1 = routers.DefaultRouter()
user_router_v1.register("user", UserViewSet, basename="user")

urlpatterns = [
    path("user/", include("djoser.urls.authtoken")),
    path("", include(user_router_v1.urls)),
]
