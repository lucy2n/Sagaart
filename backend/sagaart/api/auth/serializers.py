from rest_framework import serializers
from djoser.serializers import UserCreateSerializer
from userauth.models import User, UserSubscribe


class UserRegistrationSerializer(UserCreateSerializer):
    class Meta(UserCreateSerializer.Meta):
        model = User
        fields = (
            'email', 'first_name', 'sur_name',
            'middle_name', 'telephone', 'password'
        )


class UserSerializer(serializers.ModelSerializer):
    subcribe = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = (
            'id', 'email', 'telephone', 'first_name',
            'sur_name', 'middle_name', 'subcribe',
        )

    def get_subcribe(self, obj):
        return SubscriptionSerializer(obj.subscribe).data


class SubscriptionSerializer(serializers.ModelSerializer):
    class Meta(serializers.ModelSerializer):
        model = UserSubscribe
        fields = (
            'tariff', 'cost', 'status', 'date_start', 'date_end'
        )
