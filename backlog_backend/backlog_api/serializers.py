from django.db.models import fields
from rest_framework import serializers
from .models import GameInfo

# project serializer

class GameInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = GameInfo
        fields = ['name', 'hours', 'completion']