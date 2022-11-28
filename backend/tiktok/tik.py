from utils import *
import json
import datetime
from django.core.serializers.json import DjangoJSONEncoder


class MusicCrawler:
    def __init__(self):
        self.requests_url = request_url
        self.headers = headers
        self.roll = []
        self.model = "tiktok.music"

    def crawl(self, request_url=request_url, headers=headers):
        resp = requests.get(request_url, headers)
        resp.raise_for_status()
        return resp.json()

    def parse(self):
        for items in self.crawl()["musicInfoList"]:
            musicdict = dict()
            musicdict["model"] = self.model
            musicdict["fields"] = {}
            for keys in items["music"].keys():
                musicdict["pk"] = items["music"]["id"]
                if keys not in ["original", "id"]:
                    musicdict["fields"][keys] = items["music"][keys]
            statsdict = {}
            statsdict["fields"] = {}
            statsdict["fields"]["music_id"] = items["music"]["id"]
            statsdict["fields"]["count"] = items["stats"]["videoCount"]
            statsdict["fields"]["date"] = datetime.datetime.now()
            statsdict["model"] = "tiktok.stat"

            self.roll.append(musicdict)
            self.roll.append(statsdict)
        return self.roll

    def excecute(self):
        with open(
            r"C:\Users\SteelSeries\Desktop\back\trendasemble\backend\tiktok\fixtures\output.json",
            "w",
        ) as fp:
            json.dump(
                list(self.parse()),
                fp,
                indent=4,
                ensure_ascii=True,
                cls=DjangoJSONEncoder,
            )

        print("View 'resources/output.json' for results")


MusicCrawler().excecute()
