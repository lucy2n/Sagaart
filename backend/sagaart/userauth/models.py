from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    email = models.CharField(max_length=254, unique=True)
    first_name = models.CharField('Имя', max_length=150)
    last_name = models.CharField('Фамилия', max_length=150)
    middle_name = models.CharField('Отчество', max_length=150)
    username = models.CharField(max_length=254, null=True, default='Username')
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']


class Subscription(models.Model):
    user = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='author')
    following = models.ForeignKey(
        User, on_delete=models.CASCADE, related_name='subscriber')

    class Meta:
        verbose_name = 'подписчик'
        verbose_name_plural = 'Подписчики'
