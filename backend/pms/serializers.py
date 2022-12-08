from rest_framework import serializers
from .models import Booking
from .models import Tenant


class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = ['propertyName',
                  'arrivalDateTime',
                  'departureDateTime',
                  'sourceType',
                  'source',
                  'adultsCount',
                  'childrenCount',
                  'petsCount',
                  'tenantName',
                  'notes',
                  'monthlyRent',
                  'deposit',
                  'cleaningFee',
                  'totalFirstPayment',
                  'totalMonthlyPayment',
                  'otherFees',
                  'total',
                  'bookingConfirmationGuestCheck',
                  'bookingConfirmationAgentCheck',
                  'notifyThirdParitiesCheck'
                  ]


class TenantSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tenant
        fields = ['firstName',
                  'lastName',
                  'gender',
                  'email',
                  'contactNumber',
                  'addressLineTwo',
                  'cityDistrict',
                  'provinceState',
                  'postalCode',
                  'country']
