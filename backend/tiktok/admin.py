from django.contrib import admin

# Register your models here.
from .models import Music,Stat


admin.site.register(Music)
admin.site.register(Stat)