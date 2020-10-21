from django.urls import path
from .views import BlogListView, BlogDetailView, GameListView, GameDetailView

app_name = 'articles'
urlpatterns = [
    path('', BlogListView.as_view()),
    path('blog/', BlogListView.as_view(), name="bloglist"),
    path('blog/<int:pk>/', BlogDetailView.as_view(), name="blogdetail"),
    # path('<str:pk>/', BlogDetailView.as_view()),
    path('games/', GameListView.as_view(), name="gamelist"),
    path('games/<int:pk>', GameDetailView.as_view(), name="gamedetail"),
]
