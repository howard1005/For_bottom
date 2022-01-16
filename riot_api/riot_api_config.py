import requests

class RiotApiConfig:
    def __init__(self) -> None:
        self.api_key = 'RGAPI-cd5385d1-9694-4045-ae0a-4a073c9a9b37'

    def get_api_key(self):
        return self.api_key

    def url(self, region, path):  # region : kr, asia....
        return "https://{}.api.riotgames.com".format(region) + path + '?api_key=' + self.api_key

    def get(self, url):
        print("get-url : {}".format(url))
        return requests.get(url)
