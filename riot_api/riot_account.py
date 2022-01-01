from riot_api_config import RiotApiConfig

class RiotAccount:
    def __init__(self) -> None:
        self.__url = RiotApiConfig().url
        self.__get = RiotApiConfig().get

