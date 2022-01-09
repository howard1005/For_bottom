from riot_api_config import RiotApiConfig
from riot_summoner import RiotSummoner

class RiotMastery:
    def __init__(self, riot_summoner: RiotSummoner) -> None:
        self.riot_summoner = riot_summoner

        self.__url = RiotApiConfig().url
        self.__get = RiotApiConfig().get

# CHAMPION-MASTERY-V4
    def get_all_champion_mastery_entries(self):
        summoner = self.riot_summoner.get_summoner()
        return self.__get(self.__url('kr', "/lol/champion-mastery/v4/champion-masteries/by-summoner/{}".format(summoner['id']))).json()
