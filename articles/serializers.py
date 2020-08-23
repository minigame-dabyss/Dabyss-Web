from rest_framework import serializers
from .models import BlogArticle


class BlogArticleSerializer(serializers.ModelSerializer):

    class Meta:
        model = BlogArticle
        fields = ('title', 'summary', 'text', 'date', 'sumnail',)
