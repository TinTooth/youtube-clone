from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from .models import Comment
from .serializers import CommentSerializer

# Create your views here.

@api_view(['GET'])
@permission_classes([AllowAny])
def get_all_comments(request, pk):
    comments = Comment.objects.filter(video_id = pk)
    serializer = CommentSerializer(comments, many = True)
    return Response(serializer.data, status= status.HTTP_200_OK)


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_comment(request):
    if request.method == 'POST':
        serializer = CommentSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user = request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def comment_detail(request,pk):
    comment = get_object_or_404(Comment,pk = pk)
    if request.method == 'PUT':
        serializer = CommentSerializer(comment, data = request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)