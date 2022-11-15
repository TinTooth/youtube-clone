from django.urls import path
from . import views

urlpatterns = [

path('<int:pk>/', views.get_all_comments),
path('', views.user_comments)

]