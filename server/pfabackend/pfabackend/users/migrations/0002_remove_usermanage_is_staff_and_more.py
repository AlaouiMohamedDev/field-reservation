# Generated by Django 4.1.7 on 2023-03-19 16:31

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='usermanage',
            name='is_staff',
        ),
        migrations.RemoveField(
            model_name='usermanage',
            name='is_superuser',
        ),
        migrations.RemoveField(
            model_name='usermanage',
            name='last_login',
        ),
        migrations.RemoveField(
            model_name='usermanage',
            name='name',
        ),
        migrations.AddField(
            model_name='usermanage',
            name='role',
            field=models.CharField(choices=[('admin', 'Admin'), ('client', 'Client'), ('host', 'Host')], default='client', max_length=10),
        ),
        migrations.AlterField(
            model_name='usermanage',
            name='first_name',
            field=models.CharField(max_length=50),
        ),
        migrations.AlterField(
            model_name='usermanage',
            name='is_active',
            field=models.BooleanField(default=True),
        ),
        migrations.AlterField(
            model_name='usermanage',
            name='last_name',
            field=models.CharField(max_length=50),
        ),
    ]
