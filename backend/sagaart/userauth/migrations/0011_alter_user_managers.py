# Generated by Django 5.0.6 on 2024-06-20 00:53

import userauth.models
from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('userauth', '0010_remove_user_username'),
    ]

    operations = [
        migrations.AlterModelManagers(
            name='user',
            managers=[
                ('objects', userauth.models.UserManager()),
            ],
        ),
    ]