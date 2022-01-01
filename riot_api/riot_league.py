from riot_api_config import RiotApiConfig
from riot_summoner import RiotSummoner

class RiotLeague:
    def __init__(self, riot_summoner: RiotSummoner) -> None:
        self.riot_summoner = riot_summoner

        self.__url = RiotApiConfig().url
        self.__get = RiotApiConfig().get

# LEAGUE-V4
    def get_league_entries(self):
        summoner = self.riot_summoner.get_summoner()
        return self.__get(self.__url('kr', "/lol/league/v4/entries/by-summoner/{}".format(summoner['id']))).json()
