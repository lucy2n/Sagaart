from django.core.mail import send_mail
from rest_framework import status, mixins, generics
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import FeedbackSerializer


class FeedbackView(generics.CreateAPIView):

    def post(self, request):
        serializer = FeedbackSerializer(data=request.data)
        if serializer.is_valid():
            send_mail(
                subject="subject",
                message="message",
                from_email="from",
                recipient_list=["to"]
            )
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
