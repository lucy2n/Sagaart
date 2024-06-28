# Generated by Django 5.0.6 on 2024-06-28 20:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('artobjects', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='artobject',
            name='end_cost',
            field=models.PositiveIntegerField(verbose_name='Итоговая цена'),
        ),
        migrations.AlterField(
            model_name='artobject',
            name='fair_cost',
            field=models.PositiveIntegerField(blank=True, verbose_name='Желаемая цена'),
        ),
        migrations.AlterField(
            model_name='artobject',
            name='year',
            field=models.PositiveIntegerField(verbose_name='Год создания'),
        ),
    ]
