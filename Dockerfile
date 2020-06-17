FROM python:3.8-slim

RUN mkdir /app
WORKDIR /app

ADD . /app/

RUN pip install -U pip && \
    pip install Django && \
    pip install Pillow && \
    pip install requests

CMD python manage.py runserver 0.0.0.0:5000