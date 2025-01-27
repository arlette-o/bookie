from rest_framework import serializers
from .models import Book, Review

class BookSerializer(serializers.ModelSerializer):
    class Meta: 
        model = Book
        fields = ('id','title', 'author', 'rating', 'image')

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review