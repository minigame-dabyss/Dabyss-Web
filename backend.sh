#!/bin/sh

set -xe

until PGPASSWORD=dabyss psql -h 'db' -d 'dabyss-web' -U 'dabyss' -c '\q'; do
  >&2 echo "Postgres is unavailable - sleeping"
  sleep 1
done

>&2 echo "Postgres is up - executing command"

python manage.py makemigrations
python manage.py migrate

set +e
python manage.py custom_createsuperuser --username dabyss --password dabyss --noinput --email 'dabyss@gmail.com'

set -e
python manage.py runserver 0.0.0.0:8000