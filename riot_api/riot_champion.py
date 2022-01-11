from riot_api_config import RiotApiConfig

class RiotChampion:
    def __init__(self) -> None:

        self.__url = RiotApiConfig().url
        self.__get = RiotApiConfig().get

# CHAMPION-V3
    def get_champion_rotations(self):
        return self.__get(self.__url('kr', "/lol/platform/v3/champion-rotations")).json()