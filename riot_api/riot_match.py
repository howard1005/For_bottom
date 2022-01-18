from riot_api_config import RiotApiConfig
from riot_summoner import RiotSummoner

class RiotMatch:
    def __init__(self, riot_summoner: RiotSummoner) -> None:
        self.riot_summoner = riot_summoner

        self.__url = RiotApiConfig().url
        self.__get = RiotApiConfig().get

    def get_match_ids(self, count=20):
        summoner = self.riot_summoner.get_summoner()
        return self.__get(self.__url('asia', "/lol/match/v5/matches/by-puuid/{}/ids".format(summoner['puuid'])) + "&start=0&count={}".format(count)).json()

    def get_matchs(self):
        ret = []
        match_ids = self.get_match_ids()
        for match_id in match_ids:
            ret.append(self.__get(
                self.__url('asia', "/lol/match/v5/matches/{}".format(match_id))).json())
        return ret

    def get_match_timeline(self):
        ret = []
        match_ids = self.get_match_ids()
        for match_id in match_ids:
            ret.append(self.__get(
                self.__url('asia', "/lol/match/v5/matches/{}/timeline".format(match_id))).json())
        return ret