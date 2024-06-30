from rest_framework import serializers

from analytics.models import Analytics


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
