from riot_api_config import RiotApiConfig
from riot_summoner import RiotSummoner

class RiotLeague:
    def __init__(self, riot_summoner: RiotSummoner = None) -> None:
        self.riot_summoner = riot_summoner
        self.queue = ["RANKED_SOLO_5x5", "RANKED_FLEX_SR", "RANKED_FLEX_TT"]
        self.tier = ["DIAMOND", "PLATINUM", "GOLD", "SILVER", "BRONZE", "IRON"]
        self.division = ["I", "II", "III", "IV"]

        self.__url = RiotApiConfig().url
        self.__get = RiotApiConfig().get

# LEAGUE-V4
    def get_challenger_league(self):
        return self.__get(self.__url('kr', "/lol/league/v4/challengerleagues/by-queue/{}".format(self.queue[0]))).json()

    def get_league_entries(self):
        summoner = self.riot_summoner.get_summoner()
        print(summoner)
        return self.__get(self.__url('kr', "/lol/league/v4/entries/by-summoner/{}".format(summoner['id']))).json()
    
    def get_all_league_entries(self, tier="DIAMOND", division="I"): # QUERY PARAMETERS 존재 : page
        return self.__get(self.__url('kr', "/lol/league/v4/entries/{}/{}/{}".format(self.queue[0],tier,division))).json()

    def get_grandmaster_league(self):
        return self.__get(self.__url('kr', "/lol/league/v4/grandmasterleagues/by-queue/{}".format(self.queue[0]))).json()
    
    def get_master_league(self):
        return self.__get(self.__url('kr', "/lol/league/v4/masterleagues/by-queue/{}".format(self.queue[0]))).json()

    def get_all_league_entries_by_tier(self, tier="DIAMOND", division="I"):
        if tier == "CHALLENGER":
            return self.get_challenger_league()
        elif tier == "GRANDMASTER":
            return self.get_grandmaster_league()
        elif tier == "MASTER":
            return self.get_master_league()
        return self.get_all_league_entries(tier, division)