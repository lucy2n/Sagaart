import base64

from rest_framework import serializers
from django.core.files.base import ContentFile
from django.db import transaction

from analytics.models import Analytics
from api.constants import GENDER_LIST, SIZE_CATEGORIES
from api.artobjects.serializers import (
    ArtObjectSerialzer,
    ObjectAuthorSerializer,
)
from artobjects.models import ArtObject, ObjectAuthor


class AnalyticsSerializerForWrite(serializers.ModelSerializer):
    class Meta:
        model = Analytics
        fields = (
            "product_name",
            "category",
            "year",
            "height",
            "width",
            "material",
            "tablet_material",
            "author_name",
            "gender",
            "birth_year",
            "birth_country",
            "solo_show",
            "group_show",
        )


class AnalyticsListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Analytics
        fields = ("id", "product_name", "author_name", "analytics_date")


class AnalyticsSerializerForRead(serializers.ModelSerializer):
    class Meta:
        model = Analytics
        fields = (
            "id",
            "analytics_owner",
            "product_name",
            "category",
            "year",
            "height",
            "width",
            "material",
            "tablet_material",
            "author_name",
            "gender",
            "birth_year",
            "birth_country",
            "solo_show",
            "group_show",
            "calculated_price",
        )
