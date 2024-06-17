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
    author = serializers.CharField(max_length=SERIALIZER_CHAR_LEN)
    author_age = serializers.IntegerField()
    author_sex = serializers.ChoiceField(choices=GENDER_LIST)
    author_living_city = serializers.CharField(max_length=SERIALIZER_CHAR_LEN)
    product_name = serializers.CharField(max_length=SERIALIZER_CHAR_LEN)
    product_category = serializers.PrimaryKeyRelatedField(read_only=True)
    product_style = serializers.PrimaryKeyRelatedField(read_only=True)
    product_genre = serializers.PrimaryKeyRelatedField(read_only=True)
    material = serializers.CharField(max_length=SERIALIZER_CHAR_LEN)
    tablet_material = serializers.CharField(max_length=SERIALIZER_CHAR_LEN)
    product_size = serializers.CharField(max_length=SERIALIZER_CHAR_LEN)
    product_creation_year = serializers.CharField(max_length=SERIALIZER_CHAR_LEN)
    product_city_of_sale = serializers.CharField(max_length=SERIALIZER_CHAR_LEN)


class AnalyticSerializerForWrite(serializers.ModelSerializer):

    class Meta:
        model = Analytics
        fields = (
            "art_object",
            "object_author",
            "recepient",
        )

class AnalyticSerializerForRead(serializers.ModelSerializer):
    class Meta:
        model = Analytics
        fields = (
            "id",
            "calculated_price",
            "collection",
            "media",
            "created_at",
            "recepient",
        )


class UserAnalyticsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Analytics
        fields = ("id", "order_name_author", "order_name_product", "date")
