from django.urls import path

from . import views

app_name = 'alltaskdone'

urlpatterns = [
    path('', views.home, name='home'),
]
