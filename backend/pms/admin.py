from django.contrib import admin
from .models import Booking
from .models import Tenant
from user.models import User


admin.site.register(Booking)
admin.site.register(Tenant)
admin.site.register(User)
