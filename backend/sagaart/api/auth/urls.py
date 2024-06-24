from django.urls import path, include
from rest_framework import routers

from .views import UserViewSet

user_router_v1 = routers.DefaultRouter()
user_router_v1.register("user", UserViewSet, basename="user")

urlpatterns = [
    path("user/", include("djoser.urls.authtoken")),
    path(
        "user/",
        UserViewSet.as_view({'post': 'create'})
    ),
    path(
        "user/<int:id>/",
        UserViewSet.as_view({"get": "retrieve", "patch": "partial_update"})
    ),
    path(
        "user/emailpassword/",
        UserViewSet.as_view({'post': 'reset_password'})
    ),
    path(
        "user/resetpassword/<str:uid>/<str:token>/",
        UserViewSet.as_view({'post': 'reset_password_confirm'})
    ),
]
