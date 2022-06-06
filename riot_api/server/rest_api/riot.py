from django.http import HttpResponse

import os, sys
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))))
from riot_api import RiotApi
from rest_framework.decorators import api_view 
from rest_framework.response import Response

riotApi = RiotApi()

def index(request):
    return HttpResponse("")

@api_view(['GET'])
def get_summoner(request, name):
    if 'name' is not None:
        return Response(riotApi.get_summoner_by_summoner_name(name))

@api_view(['GET'])
def get_league_entries(request, name):
    if 'name' is not None:
        return Response(riotApi.get_league_entries_by_summoner_name(name))

@api_view(['GET'])
def get_all_league_entries(request, tier, division):
    return Response(riotApi.get_all_league_entries(tier, division))

@api_view(['GET'])
def get_matchs(request, name):
    res = riotApi.get_matchs_by_summoner_name(name)
    print(res)
    return Response(res)

@api_view(['GET'])
def get_match_timelines(request, name):
    return Response(riotApi.get_match_timelines_by_summoner_name(name))

@api_view(['GET'])
def get_all_champion_mastery_entries(request, name):
    return Response(riotApi.get_all_champion_mastery_entries_by_summoner_name(name))

@api_view(['GET'])
def get_total_mastery_score(request, name):
    return Response(riotApi.get_total_mastery_score_by_summoner_name(name))

@api_view(['GET'])
def get_champion_rotations(request):
    return Response(riotApi.get_champion_rotations())

@api_view(['GET'])
def get_lol_status(request):
    return Response(riotApi.get_lol_status())

@api_view(['GET'])
def get_current_game_information(request, name):
    return Response(riotApi.get_current_game_information_by_summoner_name(name))
    
