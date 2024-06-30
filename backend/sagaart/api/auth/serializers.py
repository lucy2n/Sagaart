import re
from rest_framework import serializers
from djoser.serializers import (
    UserCreateSerializer,
)

from userauth.models import User
from api.constants import (
    TELEPHONE_VALIDATE,
    PASSWORD_VALIDATE,
    USERNAME_VALIDATE,
)


class UserRegistrationSerializer(UserCreateSerializer):
    email = serializers.EmailField()

    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = (
            "email",
            "password",
        )

    def validate(self, attrs):
        super().validate(attrs)
        password = attrs.get("password")
        valdate_error = {}
        if not re.match(PASSWORD_VALIDATE, password):
            valdate_error["password"] = (
                "Пароль может содержать заглавные и прописные буквы A-Z,"
                "цифры 0-9, а также знак тире “-” и спец. символы"
            )
        if valdate_error:
            raise serializers.ValidationError(valdate_error)
        return attrs


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
        print(data["user_name"])
        if not data:
            raise serializers.ValidationError("Пустая форма")
        if "user_name" in data and not data["user_name"]:
            if not re.match(USERNAME_VALIDATE, data["user_name"]):
                valdate_error["user_name"] = "введен некорректно"
            elif data["user_name"][0] == " " and data["user_name"][-1] == " ":
                valdate_error["user_name"] = "введен некорректно"
        if "telephone" in data and not re.match(
            TELEPHONE_VALIDATE, data["telephone"]
        ):
            valdate_error["telephone"] = "Вы ввели телефон некорректно"
        if valdate_error:
            raise serializers.ValidationError(valdate_error)
        return data
