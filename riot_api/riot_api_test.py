import unittest   # The test framework
from riot_api import RiotApi

import os
import sys
sys.path.append(os.path.join(os.path.dirname(os.path.abspath(__file__)),  '..', '..'))

class RiotApiTest(unittest.TestCase):

    def setUp(self):
        self.riot_api = RiotApi()

    def test_get_summoner(self):
        summoner = self.riot_api.get_summoner('hide on bush')
        print("\n[summoner]\n", summoner)

    def test_get_league_entries(self):
        league_entries = self.riot_api.get_league_entries('hide on bush')
        print("\n[league_entries]\n", league_entries)
    
    def test_get_match_ids(self):
        match_ids = self.riot_api.get_match_ids('hide on bush')
        print("\n[match_ids]\n", match_ids)

    def test_get_matchs(self):
        matchs = self.riot_api.get_matchs('hide on bush')
        print("\n[matchs]\n", matchs)

if __name__ == '__main__':
    unittest.main()
