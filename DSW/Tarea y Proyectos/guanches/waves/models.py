from django.conf import settings
from django.db import models


class Wave(models.Model):
    content = models.TextField(max_length=256)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=False)
    echo = models.ForeignKey('echos.Echo', related_name='comments', on_delete=models.CASCADE)
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)
