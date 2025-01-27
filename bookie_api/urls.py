
from django.urls import path
from .views import BookView, ReviewView

#path('/', ),
urlpatterns = [
    path('book', BookView.as_view()),
    path('reviews', ReviewView.as_view())
]