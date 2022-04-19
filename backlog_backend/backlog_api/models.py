from django.db import models
from django.utils import timezone

# Create your models here.

# Model for games
class GameInfo(models.Model):
    CompletionStatus = models.TextChoices(
        'CompletionStatus', 'Incomplete Playing Complete'
        )
    name = models.CharField(max_length=100)
    hours = models.IntegerField()
    completion = models.CharField(
        blank=True, 
        choices=CompletionStatus.choices, 
        max_length=20
        )

    def __str__(self):
        return self.name