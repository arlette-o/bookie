from django.shortcuts import render
from rest_framework import generics
from .serializers import BookSerializer, ReviewSerializer
from .models import Book, Review

class BookView(generics.ListAPIView):
    queryset=Book.objects.all()
    serializer_class = BookSerializer

class ReviewView(generics.ListAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer

