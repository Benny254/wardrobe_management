from multiprocessing import AuthenticationError
from fastapi import Response
from rest_framework import generics
from .serializers import UserSerializer
from django.contrib.auth.models import User
from rest_framework.permissions import AllowAny
from django.contrib.auth import authenticate
class RegisterView(generics.CreateAPIView):
    def post(self, request, *args, **kwargs):
        print("Received request data:", request.data)
        return super().post(request, *args, **kwargs)


class LoginView(generics.GenericAPIView):
    permission_classes = [AllowAny]

    def post(self, request):
        username = request.data.get("username")
        password = request.data.get("password")
        user = authenticate(username=username, password=password)

        if user is not None:
            return Response({"message": "Login successful!"})
        return Response({"error": "Invalid credentials"}, status=400)
