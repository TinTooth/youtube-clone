from rest_framework import serializers
from .models import Reply

class ReplySerializer(serializers.ModelSerializer):
    class Meta:
        model = Reply
        fields = ['id','comment_id','user_id', 'username','text']
        

    username = serializers.SerializerMethodField()

    def get_username(self,reply:Reply):
        return reply.user.username

    