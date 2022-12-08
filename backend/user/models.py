from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin


class UserManager(BaseUserManager):
    def create_user(self, email, password=None, is_active=True, is_staff=False, is_admin=False):
        if not email:
            raise ValueError("Users must have an email address")

        if not password:
            raise ValueError("Users must have a password")

        user = self.model(
            email=self.normalize_email(email)

        )
        user.set_password(password)
        user.staff = is_staff
        user.admin = is_admin
        user.active = is_active
        user.save(using=self._db)
        return user

    def create_staffuser(self, email, password=None):
        user = self.create_user(email, password=password, is_staff=True)
        return user

    def create_superuser(self, email, password=None):
        user = self.create_user(email, password=password,
                                is_staff=True, is_admin=True)
        return user


class User(AbstractBaseUser, PermissionsMixin):

    class Role(models.TextChoices):
        ADMIN = "ADMIN", 'Admin'
        MANAGER = "MANAGER", 'Manager'
        AGENT = "AGENT", 'Agent'
        OWNER = "OWNER", 'Owner'
        TENANT = "TENANT", 'Tenant'
        TECHNICIAN = "TECHNICIAN", 'Technician'
        MEMBER = "MEMBER", 'Member'

    base_role = Role.MEMBER
    role = models.CharField(max_length=50, choices=Role.choices)
    email = models.EmailField(max_length=255, unique=True)
    active = models.BooleanField(default=True)
    staff = models.BooleanField(default=False)
    admin = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = UserManager()

    def __str__(self):
        return self.email

    def has_perm(self, perm, obj=None):
        return True

    def has_module_perms(self, app_label):
        return True

    @property
    def is_staff(self):
        return self.staff

    @property
    def is_active(self):
        return self.active

    @property
    def is_admin(self):
        return self.admin

    def save(self, *args, **kwargs):
        if not self.pk:
            self.role = self.base_role
            return super().save(*args, **kwargs)


class Admin(User):
    base_role = User.Role.ADMIN

    class Meta:
        proxy = True


class Manager(User):
    base_role = User.Role.MANAGER

    class Meta:
        proxy = True


class Agent(User):
    base_role = User.Role.AGENT

    class Meta:
        proxy = True


class Owner(User):
    base_role = User.Role.OWNER

    class Meta:
        proxy = True


class Tenant(User):
    base_role = User.Role.TENANT

    class Meta:
        proxy = True


class Technician(User):
    base_role = User.Role.TECHNICIAN

    class Meta:
        proxy = True


class Manager(User):
    base_role = User.Role.MANAGER

    class Meta:
        proxy = True
