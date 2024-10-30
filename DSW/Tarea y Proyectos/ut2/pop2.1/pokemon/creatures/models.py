from django.db import models


# Create your models here.
class Creature(models.Model):
    name = models.CharField(max_length=255, unique=True)
    slug = models.SlugField(max_length=255, unique=True)
    type1 = models.CharField(max_length=50)
    attack = models.IntegerField(default=0)
    defense = models.IntegerField(default=0)
    speed = models.IntegerField(default=0)
    generation = models.IntegerField(default=1)

    def __str__(self):
        return self.name
