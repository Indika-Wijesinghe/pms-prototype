
from django.contrib import admin
from django.urls import path, include
from pms import views
from .views import MyTokenObtainPairView


from rest_framework_simplejwt.views import (
    TokenRefreshView
)


urlpatterns = [
    path('admin/', admin.site.urls),
    path('add-tenant/', views.add_tenant),
    path('add-booking/', views.add_booking),
    path('get-single-booking/<int:id>', views.get_single_booking),
    path('token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('check-permissions/', views.check_permissions, name='test'),


]
