FROM python:3.7
ENV PYTHONUNBUFFERED 1
WORKDIR /backend
ADD requirements.txt /backend/
RUN pip install -r requirements.txt