# Generated by Django 4.0.4 on 2022-11-17 20:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('comments', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='comment',
            name='video_id',
            field=models.CharField(max_length=255),
        ),
    ]