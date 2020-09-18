from django.db import models
from markdownx.models import MarkdownxField


class HomeArticle(models.Model):
    title = models.CharField(max_length=40)
    summary = models.TextField('summary', blank=False)
    text = MarkdownxField('本文', help_text='Markdown形式で書いてください。')
    date = models.DateTimeField(blank=False)

    def __str__(self):
        return self.title


class BlogArticle(models.Model):
    title = models.CharField(max_length=40)
    slug = models.CharField('URL', blank=False, max_length=20)
    author = models.CharField('著者', blank=False, max_length=40)
    summary = models.TextField('概要', blank=False)
    text = MarkdownxField('本文', help_text='Markdown形式で書いてください。')
    date = models.DateTimeField(blank=False)
    sumnail = models.ImageField(
        upload_to='blog_sumnail/',
        default="logo_Dabyss.png")

    def __str__(self):
        return self.title


class GamesArticle(models.Model):
    title = models.CharField(max_length=40)
    summary = models.TextField('概要', blank=False)
    text = MarkdownxField('本文', help_text='Markdown形式で書いてください。')
    date = models.DateTimeField(blank=False)
    sumnail = models.ImageField(
        upload_to='game_sumnail/',
        default="logo_Dabyss.png")

    def __str__(self):
        return self.title
