from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager
from django.core.validators import MinLengthValidator

from . import constants


class UserManager(BaseUserManager):
    """Менеджер моделей для пользовательской модели без поля username"""

    use_in_migrations = True

    def _create_user(self, email, password, **extra_fields):
        if not email:
            raise ValueError("Укажите email")
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_user(self, email, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", False)
        extra_fields.setdefault("is_superuser", False)
        return self._create_user(email, password, **extra_fields)

    def create_superuser(self, email, password, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)

        if extra_fields.get("is_staff") is not True:
            raise ValueError(
                "У суперпользователя должно быть значение is_staff=True."
            )
        if extra_fields.get("is_superuser") is not True:
            raise ValueError(
                "У суперпользователя должно быть значение is_superuser=True."
            )
        return self._create_user(email, password, **extra_fields)


class User(AbstractUser):
    objects = UserManager()
    username = None
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []

    email = models.CharField(
        max_length=constants.USER_EMAIL_MAX_LEN,
        unique=True,
        validators=[MinLengthValidator(constants.USER_EMAIL_MIN_LEN)],
    )
    user_name = models.CharField(
        "ФИО",
        null=True,
        blank=True,
        max_length=constants.USER_NAME_MAX_LEN,
        validators=[MinLengthValidator(constants.USER_NAME_MIN_LEN)],
    )
    telephone = models.CharField(
        "Телефон",
        unique=True,
        null=True,
        blank=True,
        max_length=constants.USER_NAME_MAX_LEN,
        validators=[MinLengthValidator(constants.USER_PHONE_MIN_LEN)],
    )
