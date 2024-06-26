from django.core.mail import send_mail
from rest_framework import status, mixins, generics
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import FeedbackSerializer
from api.constants import FEEDBACK_EMAIL_ADRESS


class FeedbackView(generics.CreateAPIView):
    def post(self, request):
        serializer = FeedbackSerializer(data=request.data)
        if serializer.is_valid():
            send_mail(
                subject=f"Feedback from user: {self.request.user}",
                message=(
                    f"Message: {serializer.data['feedback_message']}, "
                    f"user name: {serializer.data['user_name']}, "
                    f"user phone: {serializer.data['user_phone']}"
                ),
                from_email=serializer.data["user_mail"],
                recipient_list=[FEEDBACK_EMAIL_ADRESS],
            )
            return Response(status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
