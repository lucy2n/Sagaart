from django.utils import timezone
from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager

MAX_LENGHT_EMAIL = 250
MAX_LENGHT_FULL_NAME = 50
MAX_LENGHT_TELEPHONE = 15


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

    email = models.CharField(max_length=MAX_LENGHT_EMAIL, unique=True)
    first_name = models.CharField(
        "Имя", max_length=MAX_LENGHT_FULL_NAME, null=True, blank=True
    )
    sur_name = models.CharField(
        "Фамилия", max_length=MAX_LENGHT_FULL_NAME, null=True, blank=True
    )
    middle_name = models.CharField(
        "Отчество", max_length=MAX_LENGHT_FULL_NAME, null=True, blank=True
    )
    telephone = models.CharField(
        "Телефон",
        max_length=MAX_LENGHT_TELEPHONE,
        unique=True,
        null=True,
        blank=True,
    )


class UserSubscribe(models.Model):
    user = models.OneToOneField(
        User,
        on_delete=models.CASCADE,
        primary_key=True,
        related_name="subscribe",
    )
    tariff = models.PositiveSmallIntegerField("Тариф", default=0)
    cost = models.PositiveSmallIntegerField("Цена", default=0)
    status = models.PositiveSmallIntegerField("Статус", default=0)
    date_start = models.DateField("Дата начала подписки", default=timezone.now)
    date_end = models.DateField("Дата начала подписки", default=timezone.now)

    class Meta:
        verbose_name = "подписка"
        verbose_name_plural = "Подписки"
