#!/bin/sh

set -xe

python manage.py makemigrations
python manage.py migrate
python manage.py custom_createsuperuser --username dabyss --password dabyss --noinput --email 'dabyss@gmail.com'
python manage.py runserver 0.0.0.0:8000