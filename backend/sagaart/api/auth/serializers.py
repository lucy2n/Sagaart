import re
from rest_framework import serializers
from djoser.serializers import (
    UserCreateSerializer,
    PasswordResetConfirmRetypeSerializer,
)
from userauth.models import User, UserSubscribe


MIN_NUMBER_USER_NAME = 2
TELEPHONE_VALIDATE = "^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$"


class UserRegistrationSerializer(UserCreateSerializer):
    email = serializers.EmailField()

    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = (
            "email",
            "password",
        )


class UserSerializer(serializers.ModelSerializer):
    subcribe = serializers.SerializerMethodField(read_only=True)
    email = serializers.CharField(read_only=True)

    class Meta:
        model = User
        fields = (
            "email",
            "user_name",
            "telephone",
            "subcribe",
        )

    def get_subcribe(self, obj):
        if UserSubscribe.objects.filter(user=obj).exists():
            return SubscriptionSerializer(obj.subscribe).data
        return None

    def validate(self, data):
        valdate_error = {}
        if not data:
            raise serializers.ValidationError("Пустая форма")
        if (
            "user_name" in data
            and len(data["user_name"]) < MIN_NUMBER_USER_NAME
        ):
            valdate_error["user_name"] = (
                "Введённое имя слишком короткое."
                "Он должен содержать как минимум"
                f" {MIN_NUMBER_USER_NAME} символов."
            )
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
