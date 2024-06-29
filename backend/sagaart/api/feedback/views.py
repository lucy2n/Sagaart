import django
from django.core.mail import EmailMessage, get_connection
from rest_framework import status, mixins, generics
from rest_framework.response import Response
from rest_framework.views import APIView
from django.conf import settings

from .serializers import FeedbackSerializer
from api.constants import FEEDBACK_EMAIL_ADRESS


class FeedbackView(generics.CreateAPIView):
    def post(self, request):
        serializer = FeedbackSerializer(data=request.data)
        if serializer.is_valid():
            with get_connection(
                host=settings.EMAIL_HOST,
                port=settings.EMAIL_PORT,
                username=settings.EMAIL_HOST_USER,
                password=settings.EMAIL_HOST_PASSWORD,
                use_tls=settings.EMAIL_USE_TLS,
            ) as connection:
                subject = f"Feedback from user: {self.request.user}"
                email_from = settings.EMAIL_HOST_USER
                recipient_list = [settings.EMAIL_HOST_USER]
                message = (
                    f"Message: {serializer.data['feedback_message']}, "
                    f"user name: {serializer.data['user_name']}, "
                    f"user phone: {serializer.data['user_phone']}"
                )
                EmailMessage(
                    subject,
                    message,
                    email_from,
                    recipient_list,
                    connection=connection,
                ).send()
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
