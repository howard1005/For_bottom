import unittest   # The test framework
from riot_api import RiotApi

class RiotApiTest(unittest.TestCase):

    def setUp(self):
        self.riot_api = RiotApi()

    def test_get_league_entries(self):
        league_entries = self.riot_api.get_league_entries('hide on bush')
        print(league_entries)
    

if __name__ == '__main__':
    unittest.main()
