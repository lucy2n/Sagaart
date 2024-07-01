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
        user_name = data.get('user_name')
        telephone = data.get('telephone')
        if not data:
            raise serializers.ValidationError("Ошибка формы")
        if 'user_name' in data:
            if not isinstance(user_name, str):
                raise serializers.ValidationError("Поле не может быть null")
            elif (
                not user_name == ''
                and not re.match(USERNAME_VALIDATE, user_name)
            ):
                valdate_error["user_name"] = "введен некорректно"
        if 'telephone' in data:
            if not isinstance(telephone, str):
                raise serializers.ValidationError("Поле не может быть null")
            elif (
                not telephone == ''
                and not re.match(TELEPHONE_VALIDATE, telephone)
            ):
                valdate_error["telephone"] = "Вы ввели телефон некорректно"
        if valdate_error:
            raise serializers.ValidationError(valdate_error)
        return data
