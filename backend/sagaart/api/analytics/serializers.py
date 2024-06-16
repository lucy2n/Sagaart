import base64

from rest_framework import serializers
from django.core.files.base import ContentFile

from analytics.models import Analytics
from api.constants import GENDER_LIST, SIZE_CATEGORY_LIST

SERIALIZER_CHAR_LEN = 100


class Base64ImageField(serializers.SerializerMethodField):
    def to_internal_value(self, data):
        if isinstance(data, str) and data.startswith("data:image"):
            format, imgstr = data.split(";base64")
            ext = format.split("/")[-1]
            data = ContentFile(base64.b64decode(imgstr), name="temp." + ext)
        return super().to_internal_value(data)


class AnalyticsRequestSerializer(serializers.Serializer):
    order_name_author = serializers.CharField(max_length=SERIALIZER_CHAR_LEN)
    order_age = serializers.IntegerField()
    order_sex = serializers.ChoiceField(choices=GENDER_LIST)
    order_city_live = serializers.CharField(max_length=SERIALIZER_CHAR_LEN)
    order_name_product = serializers.CharField(max_length=SERIALIZER_CHAR_LEN)
    order_images_product = Base64ImageField()
    order_category = serializers.PrimaryKeyRelatedField()
    order_style = serializers.PrimaryKeyRelatedField()
    order_genre = serializers.PrimaryKeyRelatedField()
    order_material1 = serializers.CharField(max_length=SERIALIZER_CHAR_LEN)
    order_material2 = serializers.CharField(max_length=SERIALIZER_CHAR_LEN)
    order_size = serializers.ChoiceField(choices=SIZE_CATEGORY_LIST)
    order_year_create = serializers.CharField(max_length=SERIALIZER_CHAR_LEN)
    order_city_sale = serializers.CharField(max_length=SERIALIZER_CHAR_LEN)


class AnalyticCardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Analytics
        fields = (
            "id",
            "calculated_price",
            "collection",
            "media",
            "created_at",
        )


class UserAnalyticsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Analytics
        fields = ("id", "order_name_author", "order_name_product", "date")
