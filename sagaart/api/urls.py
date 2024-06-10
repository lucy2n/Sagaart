from django.urls import path, include
from rest_framework import routers

router_v1 = routers.BaseRouter()

urlpatterns = [
    path("/", include(router_v1.urls)),
]
