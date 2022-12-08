from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

from rest_framework import status
from .models import Booking
from .serializers import BookingSerializer
from .serializers import TenantSerializer
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView


class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)

        # Add custom claims
        token['email'] = user.email
        token['roles'] = user.role

        # token['roles'] = user.roles

        return token


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer


@api_view(["POST"])
def add_booking(request, *args, **kwargs):

    serializer = BookingSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET"])
def get_single_booking(request, id, *args, **kwargs):

    booking = Booking.objects.get(pk=id)
    return Response(booking, status=status.HTTP_200_OK)


@api_view(["POST"])
def add_tenant(request, *args, **kwargs):

    serializer = TenantSerializer(data=request.data)
    print(request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET"])
# @permission_classes((IsAuthenticated, ))
def check_permissions(request, *args, **kwargs):
    return Response(request.user.role)
