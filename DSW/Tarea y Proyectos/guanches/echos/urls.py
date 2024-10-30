from django.urls import path

from . import views

app_name = 'echos'

urlpatterns = [
    path('', views.echo_list, name='echo-list'),
    path('add/', views.add_echo, name='add-echo'),
    path('<id>/', views.echo_detail, name='echo-detail'),
    path('<id>/delete/', views.delete_echo, name='delete-echo'),
    path('<id>/edit/', views.edit_echo, name='edit-echo'),
    path('<id>/waves/add', views.add_wave, name='add-wave'),
    path('<id>/waves', views.wave_detail, name='wave-detail'),
]
