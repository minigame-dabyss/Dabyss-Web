from rest_framework import serializers
from .models import BlogArticle, HomeArticle, GamesArticle


class BlogArticleSerializer(serializers.ModelSerializer):

    class Meta:
        model = BlogArticle
        fields = ('title', 'author', 'summary', 'text', 'date', 'sumnail',)


class HomeArticleSerializer(serializers.ModelSerializer):

    class Meta:
        model = HomeArticle
        fields = ('title', 'summary', 'text', 'date',)


class GamesArticleSerializer(serializers.ModelSerializer):

    class Meta:
        model = GamesArticle
        fields = ('title', 'summary', 'text', 'date', 'sumnail',)
