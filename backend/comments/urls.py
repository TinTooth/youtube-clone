from django.urls import path
from . import views

urlpatterns = [

path('video/<str:pk>/', views.get_all_comments),
path('', views.create_comment),
path('<int:pk>/', views.comment_detail)

]