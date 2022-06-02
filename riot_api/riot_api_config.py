import requests

class RiotApiConfig:
    def __init__(self) -> None:
        self.api_key = 'RGAPI-a569aa9d-a30e-4e94-88b3-3a1e1c3864d4'

    def get_api_key(self):
        return self.api_key

    def url(self, region, path):  # region : kr, asia....
        return "https://{}.api.riotgames.com".format(region) + path + '?api_key=' + self.api_key

    def get(self, url):
        print("get-url : {}".format(url))
        return requests.get(url)
