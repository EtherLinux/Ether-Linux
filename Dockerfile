FROM debian:latest

RUN mkdir /app
ADD . /app
WORKDIR /app

RUN apt update && apt install live-build figlet sudo -y

RUN bash build.sh

