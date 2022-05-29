import requests

class RiotApiConfig:
    def __init__(self) -> None:
        self.api_key = 'RGAPI-06d9a747-37e6-4a23-ae4a-43d28a4b66aa'

    def get_api_key(self):
        return self.api_key

    def url(self, region, path):  # region : kr, asia....
        return "https://{}.api.riotgames.com".format(region) + path + '?api_key=' + self.api_key

    def get(self, url):
        print("get-url : {}".format(url))
        return requests.get(url)
