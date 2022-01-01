from riot_api_config import RiotApiConfig

class RiotSummoner:
    def __init__(self, encrypted_account_id=None, summoner_name=None, encrypted_puuid=None, encrypted_summoner_id=None) -> None:
        self.__url = RiotApiConfig().url
        self.__get = RiotApiConfig().get
        
        self.__encrypted_account_id = encrypted_account_id
        self.__summoner_name = summoner_name
        self.__encrypted_puuid = encrypted_puuid
        self.__encrypted_summoner_id = encrypted_summoner_id

    def __getitem__(self,key):
        return getattr(self, key)

    @property
    def encrypted_account_id(self):
        return self.__encrypted_account_id
    
    @property
    def summoner_name(self):
        return self.__summoner_name

    @property
    def encrypted_puuid(self):
        return self.__encrypted_puuid

    @property
    def encrypted_summoner_id(self):
        return self.__encrypted_summoner_id

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
    def __get_summoner_by_account_id(self, account_id):
        return self.__get(self.__url('kr', "/lol/summoner/v4/summoners/by-account/{}".format(account_id))).json()

    ''' GET /lol/summoner/v4/summoners/by-name/{summonerName}
        same get_summoner_by_account_id
    '''
    def __get_summoner_by_summoner_name(self, summoner_name):
        return self.__get(self.__url('kr', "/lol/summoner/v4/summoners/by-name/{}".format(summoner_name))).json()

    ''' GET /lol/summoner/v4/summoners/by-puuid/{encryptedPUUID}
        same get_summoner_by_account_id
    '''
    def __get_summoner_by_puuid(self, puuid):
        return self.__get(self.__url('kr', "/lol/summoner/v4/summoners/by-puuid/{}".format(puuid))).json()

    '''GET /lol/summoner/v4/summoners/{encryptedSummonerId}
        same get_summoner_by_account_id
    '''
    def __get_summoner_by_summoner_id(self, summoner_id):
        return self.__get(self.__url('kr', "/lol/summoner/v4/summoners/{}".format(summoner_id))).json()

    def get_summoner(self):
        if self.encrypted_account_id:
            return self.__get_summoner_by_account_id(self.encrypted_account_id)
        if self.summoner_name:
            return self.__get_summoner_by_summoner_name(self.summoner_name)
        if self.encrypted_puuid:
            return self.__get_summoner_by_puuid(self.encrypted_puuid)
        if self.encrypted_summoner_id:
            return self.__get_summoner_by_summoner_id(self.encrypted_summoner_id)
        return None