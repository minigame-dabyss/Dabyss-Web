# Generated by Django 3.0.7 on 2020-09-22 07:45

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0005_auto_20200915_0832'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blogarticle',
            name='date',
            field=models.DateField(),
        ),
    ]
