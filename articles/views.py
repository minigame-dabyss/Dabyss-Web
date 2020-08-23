from rest_framework import generics

from .serializers import BlogArticleSerializer

from django.shortcuts import render
from .models import BlogArticle, HomeArticle, GamesArticle
from django.views.generic import ListView, DetailView


class HomeArticleView(ListView):
    template_name = "home/listview.html"
    model = HomeArticle

    def get_queryset(self):
        object_list = self.model.objects.all().filter(pk=1)
        return object_list


class BlogListView(ListView):
    template_name = "blog/listview.html"
    model = BlogArticle
    pagenate_by = 10


class BlogDetailView(DetailView):
    template_name = "blog/detailview.html"
    model = BlogArticle
    context_object_name = 'blog'


class GameListView(ListView):
    template_name = "games/listview.html"
    model = GamesArticle


class BlogListView(generics.ListCreateAPIView):
    queryset = BlogArticle.objects.all()
    serializer_class = BlogArticleSerializer


class BlogDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = BlogArticle.objects.all()
    serializer_class = BlogArticleSerializer
