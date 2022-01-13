from riot_api_config import RiotApiConfig

class RiotStatus:
    def __init__(self) -> None:

        self.__url = RiotApiConfig().url
        self.__get = RiotApiConfig().get

# LOL-STATUS-V4
    def get_lol_status(self):
        return self.__get(self.__url('kr', "/lol/status/v4/platform-data")).json()