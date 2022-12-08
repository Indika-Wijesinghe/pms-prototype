from django.db import models


class Booking(models.Model):
    propertyName = models.CharField(max_length=256)
    arrivalDateTime = models.DateTimeField()
    departureDateTime = models.DateTimeField()
    sourceType = models.CharField(max_length=32)
    source = models.CharField(max_length=256)
    adultsCount = models.IntegerField()
    childrenCount = models.IntegerField()
    petsCount = models.IntegerField()
    tenantName = models.CharField(max_length=256)
    notes = models.TextField()
    monthlyRent = models.DecimalField(decimal_places=2, max_digits=10)

    deposit = models.DecimalField(decimal_places=2, max_digits=10)
    cleaningFee = models.DecimalField(decimal_places=2, max_digits=10)
    totalFirstPayment = models.DecimalField(decimal_places=2, max_digits=10)
    totalMonthlyPayment = models.DecimalField(decimal_places=2, max_digits=10)

    otherFees = models.JSONField()

    total = models.DecimalField(decimal_places=2, max_digits=10)
    bookingConfirmationGuestCheck = models.BooleanField()
    bookingConfirmationAgentCheck = models.BooleanField()
    notifyThirdParitiesCheck = models.BooleanField()


class Tenant(models.Model):
    firstName = models.CharField(max_length=128)
    lastName = models.CharField(max_length=128)
    gender = models.CharField(max_length=16)
    email = models.EmailField(max_length=320)
    contactNumber = models.CharField(max_length=15)
    whatsappNumber = models.CharField(max_length=15)
    addressLineOne = models.CharField(max_length=128)
    addressLineTwo = models.CharField(max_length=128)
    cityDistrict = models.CharField(max_length=96)
    provinceState = models.CharField(max_length=96)
    postalCode = models.CharField(max_length=32)
    country = models.CharField(max_length=96)
