import sys
from riot_api import RiotApi


class RiotDispatcher:
    def __init__(self) -> None:
        self.riot_api = RiotApi()
        self.api_map = {
            'riot-api/get-summoner-by-summoner-name': self.riot_api.get_summoner_by_summoner_name,
            'riot-api/get-league-entries-by-summoner-name': self.riot_api.get_league_entries_by_summoner_name,
            'riot-api/get-matchs-by-summoner-name': self.riot_api.get_matchs_by_summoner_name,
            'riot-api/get-match-timelines-by-summoner-name': self.riot_api.get_match_timelines_by_summoner_name,
            'riot-api/get-all-champion-mastery-entries-by-summoner-name': self.riot_api.get_all_champion_mastery_entries_by_summoner_name,
            'riot-api/get-total-mastery-score-by-summoner-name': self.riot_api.get_total_mastery_score_by_summoner_name,
            'riot-api/get-champion-rotations': self.riot_api.get_champion_rotations,
            'riot-api/get-lol-status': self.riot_api.get_lol_status,
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
