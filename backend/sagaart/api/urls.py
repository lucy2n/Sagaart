from django.urls import path, include

urlpatterns = [
    path("", include("api.auth.urls")),
    path("", include("api.feedback.urls")),
    path("", include("api.artobjects.urls")),
    path("", include("api.analytics.urls")),
]
