from django.urls import path
from . import views

urlpatterns = [

path('<str:pk>/', views.comment_replies_details),

]