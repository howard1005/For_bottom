import requests

class RiotApiConfig:
    def __init__(self) -> None:
        self.api_key = 'RGAPI-04053cfe-c963-425b-8932-8d9bb0818ac6'

    def get_api_key(self):
        return self.api_key

    def url(self, region, path):  # region : kr, asia....
        return "https://{}.api.riotgames.com".format(region) + path + '?api_key=' + self.api_key

    def get(self, url):
        print("get-url : {}".format(url))
        return requests.get(url)
