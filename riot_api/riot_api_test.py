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

    def test_get_matchs_by_summoner_name(self):
        matchs = self.riot_api.get_matchs_by_summoner_name('hide on bush')
        print("\n[matchs]\n", matchs)

    def test_get_all_champion_mastery_entries_by_summoner_name(self):
        masterys = self.riot_api.get_all_champion_mastery_entries_by_summoner_name('hide on bush')
        print("\n[masterys]\n", masterys)


if __name__ == '__main__':
    unittest.main()
