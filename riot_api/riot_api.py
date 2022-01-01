import requests
from riot_summoner import RiotSummonerEntry
from riot_api_config import RiotApiConfig


class RiotApi:
    def __init__(self) -> None:
        self.api_key = RiotApiConfig().get_api_key()

    def _url(self, region, path):  # region : kr, asia....
        return "https://{}.api.riotgames.com".format(region) + path + '?api_key=' + self.api_key

    def _get(self, url):
        print("get-url : {}".format(url))
        return requests.get(url)


# ACCOUNT-V1
    def get_summoner(self, user_name):
        pass

# SUMMONER-V4
    ''' GET /lol/summoner/v4/summoners/by-account/{encryptedAccountId}
    accountId	    string	Encrypted account ID. Max length 56 characters.
    profileIconId	int	    ID of the summoner icon associated with the summoner.
    revisionDate	long	Date summoner was last modified specified as epoch milliseconds. The following events will update this timestamp: summoner name change, summoner level change, or profile icon change.
    name	        string	Summoner name.
    id	            string	Encrypted summoner ID. Max length 63 characters.
    puuid	        string	Encrypted PUUID. Exact length of 78 characters.
    summonerLevel	long	Summoner level associated with the summoner.
    '''
    def get_summoner_by_account_id(self, account_id):
        return self._get(self._url('kr', "/lol/summoner/v4/summoners/by-account/{}".format(account_id))).json()

    # GET /lol/summoner/v4/summoners/by-name/{summonerName}
    def get_summoner_by_summoner_name(self, summoner_name):  # 롤 닉네임 으로
        return self._get(self._url('kr', "/lol/summoner/v4/summoners/by-name/{}".format(summoner_name))).json()

    def get_summoner(self, riot_summoner_entry: RiotSummonerEntry):
        if riot_summoner_entry.encrypted_account_id:
            return self.get_summoner_by_account_id(riot_summoner_entry.encrypted_account_id)
        if riot_summoner_entry.summoner_name:
            return self.get_summoner_by_summoner_name(riot_summoner_entry.summoner_name)
        if riot_summoner_entry.encrypted_puuid:
            pass
        if riot_summoner_entry.encrypted_summoner_id:
            pass
        return None

    def get_league_entries_by_summoner_name(self, summoner_name):
        summoner = self.get_summoner(RiotSummonerEntry(summoner_name=summoner_name))
        return self._get(self._url('kr', "/lol/league/v4/entries/by-summoner/{}".format(summoner['id']))).json()

    def get_match_ids_by_summoner_name(self, summoner_name):
        summoner = self.get_summoner(RiotSummonerEntry(summoner_name=summoner_name))
        return self._get(self._url('asia', "/lol/match/v5/matches/by-puuid/{}/ids".format(summoner['puuid'])) + "&start=0&count=20").json()

    def get_matchs_by_summoner_name(self, summoner_name):
        ret = []
        match_ids = self.get_match_ids_by_summoner_name(summoner_name)
        for match_id in match_ids:
            ret.append(self._get(
                self._url('asia', "/lol/match/v5/matches/{}".format(match_id))).json())
        return ret
