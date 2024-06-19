from rest_framework import serializers

from api.constants import MAX_CHAR_LEN


class FeedbackSerializer(serializers.Serializer):
    user_mail = serializers.EmailField()
    user_name = serializers.CharField(max_length=MAX_CHAR_LEN)
    user_phone = serializers.CharField(max_length=MAX_CHAR_LEN)
    feedback_message = serializers.CharField(max_length=500)
