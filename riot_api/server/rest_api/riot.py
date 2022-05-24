from django.http import HttpResponse

import os, sys
sys.path.append(os.path.dirname(os.path.abspath(os.path.dirname(os.path.abspath(os.path.dirname(__file__))))))
from riot_api import RiotApi
from rest_framework.views import APIView 


class RiotViewSet(APIView):
    def __init__(self):
        self.riotApi = RiotApi()


    def index(self, request):
        return HttpResponse("Hello, world. You're at the polls index.")

    def get_summoner(self, request, name):
        if 'name' is not None:
            return self.riotApi.get_summoner_by_summoner_name(name)

    def get_league_entries(self, request, name):
        if 'name' is not None:
            return self.riotApi.get_league_entries_by_summoner_name(name)

    def get_all_league_entries(self, request, tier, division):
        return self.riotApi.get_all_league_entries(tier, division)

    def get_matchs(self, request, name):
        return self.riotApi.get_matchs_by_summoner_name(name)

    def get_match_timelines(self, request, name):
        return self.riotApi.get_match_timelines_by_summoner_name(name)

    def get_all_champion_mastery_entries(self, request, name):
        return self.riotApi.get_all_champion_mastery_entries_by_summoner_name(name)

    def get_total_mastery_score(self, request, name):
        return self.riotApi.get_total_mastery_score_by_summoner_name(name)
