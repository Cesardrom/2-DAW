from django.urls import path

from . import views

app_name = 'alltaskdone'

urlpatterns = [
    path('', views.home, name='home'),
    path('tasks/<task_slug>/', views.task_detail, name='task-detail'),
    path('task_option/add/', views.add_task, name='add-task'),
    path('task_option/modified/', views.created_task, name='created-task'),
]
