import requests
from riot_api_config import RiotApiConfig


class RiotApi:
    def __init__(self) -> None:
        self.api_key = RiotApiConfig().get_api_key()

    def _url(self, region, path):  # region : kr, asia....
        return "https://{}.api.riotgames.com".format(region) + path + '?api_key=' + self.api_key

    def _get(self, url):
        print("get-url : {}".format(url))
        return requests.get(url)

    def get_summoner(self, user_name):
        return self._get(self._url('kr', "/lol/summoner/v4/summoners/by-name/{}".format(user_name))).json()

    def get_league_entries(self, user_name):
        summoner = self.get_summoner(user_name)
        return self._get(self._url('kr', "/lol/league/v4/entries/by-summoner/{}".format(summoner['id']))).json()

    def get_match_ids(self, user_name):
        summoner = self.get_summoner(user_name)
        return self._get(self._url('asia', "/lol/match/v5/matches/by-puuid/{}/ids".format(summoner['puuid'])) + "&start=0&count=20").json()

    def get_matchs(self, user_name):
        ret = []
        match_ids = self.get_match_ids(user_name)
        for match_id in match_ids:
            ret.append(self._get(
                self._url('asia', "/lol/match/v5/matches/{}".format(match_id))).json())
        return ret
