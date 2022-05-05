from django.http import HttpResponse

from workspace1.For_bottom.riot_api.riot_api import RiotApi

riotApi = RiotApi()


def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")

def get_summoner(request, name):
    if 'name' is not None:
        return riotApi.get_summoner_by_summoner_name(name)

def get_league_entries(request, name):
    if 'name' is not None:
        return riotApi.get_league_entries_by_summoner_name(name)
