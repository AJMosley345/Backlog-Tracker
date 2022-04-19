from django.shortcuts import render
from rest_framework import serializers, viewsets
from django.http import JsonResponse

from .models import GameInfo
from .serializers import GameInfoSerializer
# Create your views here.

# View to convert game model
class GameView(viewsets.ModelViewSet):
    serializer_class = GameInfoSerializer
    queryset = GameInfo.objects.all()