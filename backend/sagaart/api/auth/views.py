# from rest_framework import viewsets
from djoser.views import UserViewSet as DjoserUserViewSet
from rest_framework.decorators import action


class UserViewSet(DjoserUserViewSet):

    @action(
        methods=["POST"],
        detail=False,
        url_path='emailpassword'
    )
    def reset_password(self, request, *args, **kwargs):
        return super().reset_password(request, *args, **kwargs)

    @action(
        ['POST'], detail=False,
        url_path='resetpassword/(?P<uid>[^/.]+)/(?P<token>[^/.]+)'
    )
    def reset_password_confirm(self, request, *args, **kwargs):
        request.data['uid'] = kwargs['uid']
        request.data['token'] = kwargs['token']
        return super().reset_password_confirm(request, *args, **kwargs)
