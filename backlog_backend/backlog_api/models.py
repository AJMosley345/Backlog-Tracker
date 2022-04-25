from django.db import models
from django.utils import timezone

# Create your models here.

# Model for games
class GameInfo(models.Model):
    COMPLETION_STATUS = (
        ('I', 'Incomplete'),
        ('P', 'Playing'),
        ('C', 'Complete'),
    )
    id = models.BigAutoField(primary_key=True)
    name = models.CharField(max_length=100)
    hours = models.IntegerField(blank=True, default=0)
    completion_status = models.CharField(max_length=1, choices=COMPLETION_STATUS)
    
    def __str__(self):
        return self.name