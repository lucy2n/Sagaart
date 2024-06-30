# Generated by Django 5.0.6 on 2024-06-30 15:13

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Analytics',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('product_name', models.CharField(max_length=128, verbose_name='Название объекта')),
                ('category', models.CharField(max_length=128, verbose_name='Катоегория')),
                ('year', models.PositiveIntegerField(verbose_name='Год')),
                ('height', models.FloatField(verbose_name='Высота')),
                ('width', models.FloatField(verbose_name='Ширина')),
                ('material', models.CharField(max_length=128, verbose_name='Материал')),
                ('tablet_material', models.CharField(max_length=128, verbose_name='Материал планшета')),
                ('author_name', models.CharField(max_length=128, verbose_name='Имя автора')),
                ('gender', models.CharField(choices=[(1, 'Male'), (2, 'Female')], max_length=128, verbose_name='Пол автора')),
                ('birth_year', models.PositiveIntegerField(verbose_name='Год рождения')),
                ('birth_country', models.CharField(max_length=128, verbose_name='Город рождения')),
                ('solo_show', models.CharField(max_length=128, verbose_name='Персональные выставки')),
                ('group_show', models.CharField(max_length=128, verbose_name='Групповые выставки')),
                ('calculated_price', models.IntegerField(null=True)),
                ('analytics_date', models.DateField(auto_now_add=True, verbose_name='Дата аналитики')),
            ],
        ),
    ]