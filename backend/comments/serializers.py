from rest_framework import serializers
from .models import Comment

class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comment
        fields = ['id','video_id','username','user_id','text','likes','dislikes']

    username = serializers.SerializerMethodField()

    def get_username(self,comment:Comment):
        return comment.user.username
    