import requests

class RiotApiConfig:
    def __init__(self) -> None:
        self.api_key = 'RGAPI-a2093b36-2000-46dd-842c-7b88cee6876e'

    def get_api_key(self):
        return self.api_key

    def url(self, region, path):  # region : kr, asia....
        return "https://{}.api.riotgames.com".format(region) + path + '?api_key=' + self.api_key

    def get(self, url):
        print("get-url : {}".format(url))
        return requests.get(url)
