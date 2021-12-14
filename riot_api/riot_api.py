import requests
from riot_api_config import RiotApiConfig

class RiotApi:
    def __init__(self) -> None:
        self.api_key = RiotApiConfig().get_api_key()
        self.base_url = "https://kr.api.riotgames.com"

    def _url(self, path):
        return self.base_url + path

    def get_league_entries(self, user_name):
        r = requests.get(self._url("/lol/summoner/v4/summoners/by-name/" + user_name +'?api_key=' + self.api_key))
        encryptedSummonerId = r.json()['id'] #소환사의 고유 id

        r2  = requests.get(self._url("/lol/league/v4/entries/by-summoner/" + encryptedSummonerId +'?api_key=' + self.api_key))
        return r2.json()
