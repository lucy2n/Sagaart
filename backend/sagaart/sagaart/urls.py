from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path("api/", include("api.artobjects.urls")),
    path("api/", include("api.analytics.urls")),
    path("admin/", admin.site.urls),
]
