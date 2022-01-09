from riot_api_config import RiotApiConfig
from riot_summoner import RiotSummoner
from riot_account import RiotAccount
from riot_league import RiotLeague
from riot_mastery import RiotMastery
from riot_match import RiotMatch

class RiotApi:
    def __init__(self) -> None:
        self.api_key = RiotApiConfig().get_api_key()

# SUMMONER-V4
    def get_summoner_by_summoner_name(self, summoner_name):
        return RiotSummoner(summoner_name=summoner_name).get_summoner()

# LEAGUE-V4
    def get_league_entries_by_summoner_name(self, summoner_name):
        return RiotLeague(RiotSummoner(summoner_name=summoner_name)).get_league_entries()

# MATCH-V5
    def get_matchs_by_summoner_name(self, summoner_name):
        return RiotMatch(RiotSummoner(summoner_name=summoner_name)).get_matchs()

# CHAMPION-MASTERY-V4
    def get_all_champion_mastery_entries_by_summoner_name(self, summoner_name):
            return RiotMastery(RiotSummoner(summoner_name=summoner_name)).get_all_champion_mastery_entries()
