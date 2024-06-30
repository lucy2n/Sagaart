import re
from rest_framework import serializers
from djoser.serializers import (
    UserCreateSerializer,
)
from userauth.models import User


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
    email = serializers.CharField(read_only=True)

    class Meta:
        model = User
        fields = (
            "email",
            "user_name",
            "telephone",
        )

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
