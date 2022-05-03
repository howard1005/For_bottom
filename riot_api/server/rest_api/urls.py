from django.urls import path

from . import riot

urlpatterns = [
    path('', riot.index, name='index'),
]