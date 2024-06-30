from rest_framework import serializers

from api.constants import DEFAULT_CHARFIELD_LEN, FEEDBACK_MESSAGE_MAX_LEN


class FeedbackSerializer(serializers.Serializer):
    user_mail = serializers.EmailField()
    user_name = serializers.CharField(max_length=DEFAULT_CHARFIELD_LEN)
    user_phone = serializers.CharField(max_length=DEFAULT_CHARFIELD_LEN)
    feedback_message = serializers.CharField(
        max_length=FEEDBACK_MESSAGE_MAX_LEN
    )
