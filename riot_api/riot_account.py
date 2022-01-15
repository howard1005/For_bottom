from riot_api_config import RiotApiConfig
from riot_summoner import RiotSummoner

class RiotAccount:
    def __init__(self, riot_summoner: RiotSummoner) -> None:
        self.riot_summoner = riot_summoner

        self.__url = RiotApiConfig().url
        self.__get = RiotApiConfig().get

    def get_account(self):
        summoner = self.riot_summoner.get_summoner()
        return self.__get(self.__url('asia', "/riot/account/v1/accounts/by-puuid/{}".format(summoner['puuid']))).json()

    def get_account_of_me(self):
        return self.__get(self.__url('asia', "/riot/account/v1/accounts/me")).json()
