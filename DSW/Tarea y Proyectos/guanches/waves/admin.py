from django.contrib import admin

from .models import Wave


# Register your models here.
@admin.register(Wave)
class Admin(admin.ModelAdmin):
    list_display = [
        'content',
        'created_at',
        'updated_at',
        'user',
        'echo',
    ]
