# Generated by Django 5.0.6 on 2024-06-28 09:32

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('analytics', '0002_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='analytics',
            name='analytics_date',
            field=models.DateField(auto_now_add=True, default=datetime.datetime(2024, 6, 28, 12, 32, 59, 821077), verbose_name='Дата аналитики'),
            preserve_default=False,
        ),
    ]
