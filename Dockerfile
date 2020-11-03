FROM python:3.8.2-alpine
ENV PYTHONUNBUFFERED 1
WORKDIR /backend
ADD requirements.txt /backend/
RUN apk update
RUN apk add postgresql-dev \
    gcc \
    python3-dev \
    musl-dev \
    postgresql \
    freetype-dev \
    fribidi-dev \
    harfbuzz-dev \
    jpeg-dev \
    lcms2-dev \
    openjpeg-dev \
    tcl-dev \
    tiff-dev \
    tk-dev \
    zlib-dev
RUN pip install -r requirements.txt