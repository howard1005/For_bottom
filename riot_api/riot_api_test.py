import unittest   # The test framework
from riot_api import RiotApi

import os
import sys
sys.path.append(os.path.join(os.path.dirname(os.path.abspath(__file__)),  '..', '..'))

class RiotApiTest(unittest.TestCase):

    def setUp(self):
        self.riot_api = RiotApi()

    def test_get_summoner_by_summoner_name(self):
        summoner = self.riot_api.get_summoner_by_summoner_name('hide on bush')
        print("\n[summoner]\n", summoner)

    def test_get_league_entries_by_summoner_name(self):
        league_entries = self.riot_api.get_league_entries_by_summoner_name('hide on bush')
        print("\n[league_entries]\n", league_entries)

    def test_get_all_league_entries(self):
        all_league_entries = self.riot_api.get_all_league_entries(tier="DIAMOND", division="I")
        print("\n[all_league_entries]\n", all_league_entries)

    def test_get_matchs_by_summoner_name(self):
        matchs = self.riot_api.get_matchs_by_summoner_name('hide on bush')
        print("\n[matchs]\n", matchs)

    def test_get_all_champion_mastery_entries_by_summoner_name(self):
        masterys = self.riot_api.get_all_champion_mastery_entries_by_summoner_name('hide on bush')
        print("\n[masterys]\n", masterys)

    def test_get_total_mastery_score_by_summoner_name(self):
        total_mastery_score = self.riot_api.get_total_mastery_score_by_summoner_name('hide on bush')
        print("\n[total_mastery_score]\n", total_mastery_score)

    def test_get_champion_rotations(self):
        champion_rotations =  self.riot_api.get_champion_rotations()
        print("\n[champion_rotations]\n", champion_rotations)

    
    def test_get_lol_status(self):
        lol_status =  self.riot_api.get_lol_status()
        print("\n[lol_status]\n", lol_status)


    def test_get_current_game_information_by_summoner_name(self):
        current_game_information =  self.riot_api.get_current_game_information_by_summoner_name('hide on bush')
        print("\n[current_game_information]\n", current_game_information)

    def test_get_list_of_featured_games(self):
        featured_games =  self.riot_api.get_list_of_featured_games()
        print("\n[featured_games]\n", featured_games)

if __name__ == '__main__':
    unittest.main()
