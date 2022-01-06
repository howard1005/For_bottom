import sys
from riot_api import RiotApi


class RiotDispatcher:
    def __init__(self) -> None:
        self.riot_api = RiotApi()
        self.api_map = {
            'riot-api/get-summoner-by-summoner-name': self.riot_api.get_summoner_by_summoner_name,
            'riot-api/get-league-entries-by-summoner-name': self.riot_api.get_league_entries_by_summoner_name
        }

    def dispatch_by_argv(self, argv):
        key = argv[1]
        if len(argv) > 2:
            args = argv[2:]
        if key in self.api_map:
            self.api_map[key](*args)


if __name__ == '__main__':
    riot_dispatcher = RiotDispatcher()
    riot_dispatcher.dispatch_by_argv(sys.argv)
