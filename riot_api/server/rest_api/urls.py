from django.urls import path

from . import riot

urlpatterns = [
    path('', riot.index, name='index'),
    path('/forbot/v1/summoner/<str:name>', riot.get_summoner, name='get_summoner'),
    path('/forbot/v1/league_entries/<str:name>', riot.get_league_entries, name='get_league_entries'),
]