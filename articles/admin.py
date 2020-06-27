from django.contrib import admin
from .models import HomeArticle, BlogArticle, GamesArticle
from markdownx.admin import MarkdownxModelAdmin

admin.site.register(HomeArticle, MarkdownxModelAdmin)
admin.site.register(BlogArticle, MarkdownxModelAdmin)
admin.site.register(GamesArticle, MarkdownxModelAdmin)
