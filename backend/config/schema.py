# cookbook/schema.py
import graphene
from graphene_django import DjangoObjectType
from django.db.models import Q

from tiktok.models import Music, Stat


class MusicType(DjangoObjectType):
    class Meta:
        model = Music
        fields = (
            "id",
            "album",
            "authorName",
            "coverLarge",
            "coverMedium",
            "coverThumb",
            "duration",
            "playUrl",
            "title",
        )


class StatType(DjangoObjectType):
    class Meta:
        model = Stat
        fields = ("date", "count")


class Query(graphene.ObjectType):
    all_music = graphene.List(MusicType)
    all_stat = graphene.List(StatType)

    def resolve_all_music(self, info):

        # We can easily optimize query count in the resolve method
        return Music.objects.all()

    def resolve_all_stat(self, info):

        return Stat.objects.all()


schema = graphene.Schema(query=Query)
