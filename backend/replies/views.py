from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Reply
from .serializer import ReplySerializer
from comments.models import Comment
from comments.serializers import CommentSerializer
# Create your views here.

