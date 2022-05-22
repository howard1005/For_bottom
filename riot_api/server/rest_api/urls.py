from django.urls import path

from . import riot

urlpatterns = [
    path('', riot.index, name='index'),
    path('forbot/v1/summoner/<str:name>', riot.get_summoner, name='get_summoner'),
    path('forbot/v1/league_entries/<str:name>', riot.get_league_entries, name='get_league_entries'),
    path('forbot/v1/all_league_entries/<str:tier>/<str:division>', riot.get_all_league_entries, name='get_all_league_entries'),
    path('forbot/v1/get_matchs/<str:name>', riot.get_matchs, name='get_matchs'),
    path('forbot/v1/get_match_timelines/<str:name>', riot.get_match_timelines, name='get_match_timelines'),
    path('forbot/v1/get_match_timelines/<str:name>', riot.get_all_champion_mastery_entries, name='get_all_champion_mastery_entries'),
    
]