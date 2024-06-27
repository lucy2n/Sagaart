import re
from rest_framework import serializers
from djoser.serializers import (
    UserCreateSerializer,
    PasswordResetConfirmRetypeSerializer,
)
from userauth.models import User, UserSubscribe


TELEPHONE_VALIDATE = "^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$"
EMAIL_VALIDATE = (
    "([A-Za-z0-9]+[.-_])*[A-Za-z0-9]+@[A-Za-z0-9-]+(\.[A-Z|a-z]{2,})"
)


class UserRegistrationSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = (
            "email",
            "password",
        )

    def validate(self, data):
        valdate_error = {}
        if not re.match(EMAIL_VALIDATE, data["email"]):
            valdate_error["email"] = "Вы ввели Email некорректно"
        if valdate_error:
            raise serializers.ValidationError(valdate_error)
        return data


class UserSerializer(serializers.ModelSerializer):
    subcribe = serializers.SerializerMethodField(read_only=True)
    email = serializers.CharField(read_only=True)

    class Meta:
        model = User
        fields = (
            "email",
            "telephone",
            "first_name",
            "sur_name",
            "middle_name",
            "subcribe",
        )

    def get_subcribe(self, obj):
        if UserSubscribe.objects.filter(user=obj).exists():
            return SubscriptionSerializer(obj.subscribe).data
        return None

    def validate(self, data):
        valdate_error = {}
        if "telephone" in data and not re.match(
            TELEPHONE_VALIDATE, data["telephone"]
        ):
            valdate_error["telephone"] = "Вы ввели телефон некорректно"
        if valdate_error:
            raise serializers.ValidationError(valdate_error)
        return data


class SubscriptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserSubscribe
        fields = ("tariff", "cost", "status", "date_start", "date_end")


class SetPassword(PasswordResetConfirmRetypeSerializer):
    uid = serializers.CharField(read_only=True)
    token = serializers.CharField(read_only=True)

    class Meta:
        fields = (
            "new_password",
            "re_new_password",
        )
