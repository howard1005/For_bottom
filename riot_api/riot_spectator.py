from riot_api_config import RiotApiConfig
from riot_summoner import RiotSummoner

class RiotSpectator:
    def __init__(self, riot_summoner: RiotSummoner) -> None:
        self.riot_summoner = riot_summoner

        self.__url = RiotApiConfig().url
        self.__get = RiotApiConfig().get

# SPECTATOR-V4
    def get_current_game_information(self):
        summoner = self.riot_summoner.get_summoner()
        return self.__get(self.__url('kr', "/lol/spectator/v4/active-games/by-summoner/{}".format(summoner['id']))).json()

    def get_list_of_featured_games(self):
        return self.__get(self.__url('kr', "/lol/spectator/v4/featured-games")).json()
