from django.db import models

# PHAT models and THIN views

#Book Model 
class Book(models.Model):
   #id=models.UUIDField()
   title = models.CharField(max_length=50, default='', unique=False)
   author = models.CharField(max_length=50, default='', unique=False)
   rating = models.IntegerField(null=False, default=1)
   image = models.CharField(max_length=50)

#Review Model
class Review(models.Model):
   #id= models.UUIDField()
   review = models.TextField()
   #have association to book here: many to one
   #have association to review author here: one to one
