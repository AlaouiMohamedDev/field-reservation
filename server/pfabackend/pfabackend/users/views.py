from django.shortcuts import render
from .serializers import UserSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed
from .models import UserManage
import jwt
import datetime
# Create your views here.


class RegisterView(APIView):
    def post(self, request):
        serializer = UserSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)


class LoginView(APIView):
    def post(self, request):
        email = request.data['email']
        password = request.data['password']
        user = UserManage.objects.filter(email=email).first()
        if user is None:
            raise AuthenticationFailed('email or password incorrect')
        if not user.check_password(password):
            raise AuthenticationFailed('email or password incorrect')
        payload = {
            'id': user.id,
            'role': user.role,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
            'iat':  datetime.datetime.utcnow()
        }
        token = jwt.encode(payload, 'PLEASE WORK', algorithm='HS256')
        response = Response()
        response.set_cookie(key='jwt', value=token, httponly=True)
        response.data = {
            'jwt': token
        }
        return response


class UserView(APIView):
    def get(self, request):
        token = request.COOKIES.get('jwt')
        if not token:
            raise AuthenticationFailed('Unauthenticated')
        try:
            payload = jwt.decode(token,'PLEASE WORK',algorithms=['HS256'])
        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Unauthenticated')
        
        user = UserManage.objects.filter(id=payload['id']).first()
        serializer = UserSerializer(user)
        return Response(serializer.data)
    
class LogoutView(APIView):
    def post(self,request):
        response =Response()
        response.delete_cookie('jwt')
        response.data={
            'message':'Logged out Succesfully'
        }
        return response
    
import random
from django.core.mail import send_mail
from django.conf import settings

class ResetPasswordView(APIView):
    def post(self, request):
        email = request.data.get('email')
        if not email:
            raise AuthenticationFailed('Please provide your email address.')
        user = UserManage.objects.filter(email=email).first()
        if not user:
            raise AuthenticationFailed('There is no user with that email address.')
        
        # Generate a random token and save it in the user's model
        token = str(random.randint(100000, 999999))
        user.reset_password_token = token
        user.reset_password_token_created_at = datetime.datetime.utcnow()
        user.save()
        
        # Send the password reset email
        reset_link = f"{settings.FRONTEND_BASE_URL}/reset-password?token={token}"
        send_mail(
            'Reset Your Password',
            f'Click the link below to reset your password: {reset_link}',
            settings.EMAIL_FROM,
            [email],
            fail_silently=False,
        )
        
        return Response({'message': 'An email with instructions on how to reset your password has been sent to your email address.'})

    