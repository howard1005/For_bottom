import unittest   # The test framework
from riot_api import RiotApi

import os, sys, time
sys.path.append(os.path.join(os.path.dirname(os.path.abspath(__file__)),  '..', '..'))

def write_json(data, file_name):
    import json
    with open(os.path.dirname(os.path.abspath(__file__)) + '/test_data/' + file_name, "w") as json_file:
        json.dump(data, json_file)


class RiotApiTest(unittest.TestCase):

    def setUp(self):
        self.riot_api = RiotApi()
        time.sleep(1)

    def test_get_summoner_by_summoner_name(self):
        summoner = self.riot_api.get_summoner_by_summoner_name('hide on bush')
        print("\n[summoner]\n", summoner)
        write_json(summoner, "{}.json".format(sys._getframe().f_code.co_name))

    def test_get_league_entries_by_summoner_name(self):
        league_entries = self.riot_api.get_league_entries_by_summoner_name('hide on bush')
        print("\n[league_entries]\n", league_entries)
        write_json(league_entries, "{}.json".format(sys._getframe().f_code.co_name))

    def test_get_all_league_entries(self):
        all_league_entries = self.riot_api.get_all_league_entries(tier="DIAMOND", division="I")
        print("\n[all_league_entries]\n", all_league_entries)
        write_json(all_league_entries, "{}.json".format(sys._getframe().f_code.co_name))

    def test_get_matchs_by_summoner_name(self):
        matchs = self.riot_api.get_matchs_by_summoner_name('hide on bush')
        print("\n[matchs]\n", matchs)
        write_json(matchs, "{}.json".format(sys._getframe().f_code.co_name))

    def test_get_match_timelines_by_summoner_name(self):
        match_timelines = self.riot_api.get_match_timelines_by_summoner_name('hide on bush')
        print("\n[match_timelines]\n", match_timelines)
        write_json(match_timelines, "{}.json".format(sys._getframe().f_code.co_name))

    def test_get_all_champion_mastery_entries_by_summoner_name(self):
        masterys = self.riot_api.get_all_champion_mastery_entries_by_summoner_name('hide on bush')
        print("\n[masterys]\n", masterys)
        write_json(masterys, "{}.json".format(sys._getframe().f_code.co_name))

    def test_get_total_mastery_score_by_summoner_name(self):
        total_mastery_score = self.riot_api.get_total_mastery_score_by_summoner_name('hide on bush')
        print("\n[total_mastery_score]\n", total_mastery_score)
        write_json(total_mastery_score, "{}.json".format(sys._getframe().f_code.co_name))

    def test_get_champion_rotations(self):
        champion_rotations =  self.riot_api.get_champion_rotations()
        print("\n[champion_rotations]\n", champion_rotations)
        write_json(champion_rotations, "{}.json".format(sys._getframe().f_code.co_name))
    
    def test_get_lol_status(self):
        lol_status =  self.riot_api.get_lol_status()
        print("\n[lol_status]\n", lol_status)
        write_json(lol_status, "{}.json".format(sys._getframe().f_code.co_name))

    def test_get_current_game_information_by_summoner_name(self):
        current_game_information =  self.riot_api.get_current_game_information_by_summoner_name('hide on bush')
        print("\n[current_game_information]\n", current_game_information)
        write_json(current_game_information, "{}.json".format(sys._getframe().f_code.co_name))

    def test_get_list_of_featured_games(self):
        featured_games =  self.riot_api.get_list_of_featured_games()
        print("\n[featured_games]\n", featured_games)
        write_json(featured_games, "{}.json".format(sys._getframe().f_code.co_name))

if __name__ == '__main__':
    unittest.main()
