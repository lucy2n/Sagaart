from rest_framework import viewsets

from sagaart.auth.models import User, Subscription


class UserViewSet(viewsets.ModelViewSet):
    model = User
    serializer_class = ...


class SubscriptionViewSet(viewsets.ModelViewSet):
    model = Subscription
    serializer_class = ...
