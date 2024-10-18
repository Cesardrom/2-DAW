from django.urls import path

from . import views

app_name = 'tasks'

urlpatterns = [
    path('', views.task_list, name='task-list'),
    path('done/', views.done_list, name='done-list'),
    path('pending/', views.pending_list, name='pending-list'),
    path('add/', views.add_task, name='add-task'),
    path('task/<slug>/', views.task_detail, name='task-detail'),
    path('task/<slug>/toggle/', views.toggle_task, name='toggle-task'),
    path('task/<slug>/edit/', views.edit_task, name='edit-task'),
    path('task/<slug>/delete/', views.delete_task, name='delete-task'),
]
