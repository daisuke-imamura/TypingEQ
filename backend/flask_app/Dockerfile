FROM python:3.9.7
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN apt update \
    && apt install -y default-mysql-client \
    && apt install --no-install-recommends -y tzdata \
    && apt clean

RUN mkdir -p /var/www
WORKDIR /var/www

COPY ./backend/flask_app/app .
COPY ./backend/flask_app/scripts ./scripts

ENV FLASK_APP=model:app

COPY ./backend/flask_app/requirements.txt .

RUN pip install --upgrade pip \
    && pip install --trusted-host pypi.python.org -r requirements.txt

  
# CMD [ "uwsgi", "--ini", "/usr/src/app/app/uwsgi.ini" ]
# CMD ["gunicorn", "app:app", "--config", "/var/www/gunicorn.py" ]