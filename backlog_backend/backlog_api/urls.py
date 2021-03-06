
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from rest_framework.authtoken import views as drf_views
from rest_framework import routers
from .views import GameView

router = routers.DefaultRouter()
router.register('api/game_info', GameView)
urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
urlpatterns = router.urls