from .models import GameInfo
from rest_framework import generics, viewsets
from .serializers import GameInfoSerializer

# Game Info Viewset
# allows us to create a CRUD api without specifying methods for functionality

class GameInfoViewSet(generics.CreateAPIView):
    queryset = GameInfo.objects.filter(show=True)
    serializer_class = GameInfoSerializer