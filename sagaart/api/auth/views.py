from rest_framework import viewsets

from sagaart.auth.models import User, Subscription
from .serializers import SubscriptionSerializer, UserSerializer


class UserViewSet(viewsets.ModelViewSet):
    model = User
    serializer_class = UserSerializer


class SubscriptionViewSet(viewsets.ModelViewSet):
    model = Subscription
    serializer_class = SubscriptionSerializer
