# Generated by Django 5.0.6 on 2024-06-22 12:06

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('userauth', '0014_usersubscribe_id_alter_usersubscribe_user'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='usersubscribe',
            name='id',
        ),
        migrations.AlterField(
            model_name='user',
            name='email',
            field=models.CharField(max_length=250, unique=True),
        ),
        migrations.AlterField(
            model_name='user',
            name='first_name',
            field=models.CharField(max_length=50, verbose_name='Имя'),
        ),
        migrations.AlterField(
            model_name='user',
            name='middle_name',
            field=models.CharField(max_length=50, verbose_name='Отчество'),
        ),
        migrations.AlterField(
            model_name='user',
            name='sur_name',
            field=models.CharField(max_length=50, verbose_name='Фамилия'),
        ),
        migrations.AlterField(
            model_name='user',
            name='telephone',
            field=models.CharField(max_length=20, unique=True, verbose_name='Телефон'),
        ),
        migrations.AlterField(
            model_name='usersubscribe',
            name='cost',
            field=models.PositiveSmallIntegerField(default=0, verbose_name='Цена'),
        ),
        migrations.AlterField(
            model_name='usersubscribe',
            name='tariff',
            field=models.PositiveSmallIntegerField(default=0, verbose_name='Тариф'),
        ),
        migrations.AlterField(
            model_name='usersubscribe',
            name='user',
            field=models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, related_name='subscribe', serialize=False, to=settings.AUTH_USER_MODEL),
        ),
    ]