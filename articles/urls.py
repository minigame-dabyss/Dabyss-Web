from django.urls import path
from .views import BlogListView, BlogDetailView, GameListView

app_name = 'articles'
urlpatterns = [
    path('blog/', BlogListView.as_view(), name="bloglist"),
    path('blog/<int:pk>/', BlogDetailView.as_view(), name="blogdetail"),
    path('games/', GameListView.as_view(), name="gamelist"),
]