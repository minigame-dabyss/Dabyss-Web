# Generated by Django 3.0.7 on 2020-09-22 07:56

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0012_auto_20200922_0754'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='blogarticle',
            name='slug',
        ),
    ]
