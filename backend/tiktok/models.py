from django.db import models
import uuid

# Create your models here.


class Music(models.Model):
    id = models.CharField(primary_key=True, default="NA", max_length=200)  # new
    album = models.CharField(max_length=500)
    authorName = models.CharField(max_length=300)
    coverLarge = models.CharField(max_length=500)
    coverMedium = models.CharField(max_length=500)
    coverThumb = models.CharField(max_length=500)
    duration = models.IntegerField()
    playUrl = models.CharField(max_length=500)
    title = models.CharField(max_length=500)

    def __str__(self):
        return self.title


class Stat(models.Model):
    date = models.DateTimeField()
    count = models.IntegerField()
    music = models.ForeignKey(Music, on_delete=models.CASCADE, default="NA")

    def __str__(self):
        return str(self.date)
