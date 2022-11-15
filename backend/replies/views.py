from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Reply
from .serializer import ReplySerializer
from comments.models import Comment
from comments.serializers import CommentSerializer
# Create your views here.

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def comment_replies_details(request, pk):

    if request.method == 'GET':
        replies = Reply.objects.filter(comment_id = pk)
        serialzer = ReplySerializer(replies, many = True)
        return Response(serialzer.data, status=status.HTTP_200_OK)
    if request.method == 'POST':
        serializer = ReplySerializer(data = request.data)
        if serializer.is_valid():
            serializer.save(user= request.user, comment_id = pk)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST) 
