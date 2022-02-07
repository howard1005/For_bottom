import requests

class RiotApiConfig:
    def __init__(self) -> None:
        self.api_key = 'RGAPI-86327da1-1fa4-4217-89c2-742a7ff1a1e9'

    def get_api_key(self):
        return self.api_key

    def url(self, region, path):  # region : kr, asia....
        return "https://{}.api.riotgames.com".format(region) + path + '?api_key=' + self.api_key

    def get(self, url):
        print("get-url : {}".format(url))
        return requests.get(url)
