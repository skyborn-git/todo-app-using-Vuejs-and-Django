from rest_framework import serializers
 
from todos.models import Todo
 
class TodoSerializer(serializers.HyperlinkedModelSerializer):
 
    class Meta:
        model = Todo
        fields = ('url', 'id', 'created', 'name','description')
        extra_kwargs = {
            'url': {
                'view_name': 'todos:todo-detail',
            }
        }