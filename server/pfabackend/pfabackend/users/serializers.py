from rest_framework import serializers
from .models import UserManage
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserManage
        fields = ['id', 'first_name','last_name','role', 'email', 'password']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        instance = self.Meta.model(**validated_data)
        if password is not None:
            instance.set_password(password)
        instance.save()
        return instance