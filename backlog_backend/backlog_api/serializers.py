from django.db.models import fields
from rest_framework import serializers
from .models import GameInfo

# project serializer

class GameInfoSerializer(serializers.ModelSerializer):
    comp_choices = serializers.SerializerMethodField()

    def get_comp_choices(self, obj):
        return [choice[0] for choice in GameInfo.CompletionStatus.choices]
    class Meta:
        model = GameInfo
        fields = ['id', 'name', 'hours', 'completion', 'comp_choices']