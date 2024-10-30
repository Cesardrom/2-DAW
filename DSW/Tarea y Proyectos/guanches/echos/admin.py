from django.contrib import admin

from .models import Echo


# Register your models here.
@admin.register(Echo)
class Admin(admin.ModelAdmin):
    list_display = [
        'content',
        'created_at',
        'updated_at',
        'user',
    ]
