from django.db import models
 
 
class Todo(models.Model):
    created = models.DateTimeField(auto_now_add=True)
    name = models.CharField(max_length=100, unique=True, blank=False, null=False)
    description = models.CharField(max_length=250, default="No description available", blank=False, null=False)
 
    class Meta:
        ordering = ('created',)