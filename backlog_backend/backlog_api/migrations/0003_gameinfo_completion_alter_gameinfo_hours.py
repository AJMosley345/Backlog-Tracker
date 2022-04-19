# Generated by Django 4.0.4 on 2022-04-19 00:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('backlog_api', '0002_remove_gameinfo_date_added'),
    ]

    operations = [
        migrations.AddField(
            model_name='gameinfo',
            name='completion',
            field=models.CharField(blank=True, choices=[('Incomplete', 'Incomplete'), ('Playing', 'Playing'), ('Complete', 'Complete')], max_length=20),
        ),
        migrations.AlterField(
            model_name='gameinfo',
            name='hours',
            field=models.IntegerField(),
        ),
    ]