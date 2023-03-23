from rest_framework import serializers
from .models import ComplexeSportif

class complexSerializer(serializers.ModelSerializer):
    class Meta:
        model = ComplexeSportif
        fields = '__all__'