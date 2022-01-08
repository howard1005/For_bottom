import requests

class RiotApiConfig:
    def __init__(self) -> None:
        self.api_key = 'RGAPI-d9aad969-0c15-4da7-aa13-7397b2090734'

    def get_api_key(self):
        return self.api_key

    def url(self, region, path):  # region : kr, asia....
        return "https://{}.api.riotgames.com".format(region) + path + '?api_key=' + self.api_key

    def get(self, url):
        print("get-url : {}".format(url))
        return requests.get(url)
