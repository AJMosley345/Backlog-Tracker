from django.db import models
from django.utils import timezone

# Create your models here.

# Model for games
class GameInfo(models.Model):
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=100)
    hours = models.IntegerField(blank=True, default=0)

    def __str__(self):
        return self.name