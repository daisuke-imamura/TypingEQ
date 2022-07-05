#!/bin/bash

rm -rf backend/flask_app/app/__pycache__
rm -rf backend/flask_app/app/data/__pycache__
rm -rf backend/flask_app/app/venv
rm -rf backend/flask_app/app/data.sqlite
rm -rf backend/flask_app/app/migrations
rm -rf backend/flask_app/app/scripts

rm -rf front/React/node_modules
rm -rf front/React/build

rm -rf phpmyadmin
rm -rf gunicorn_socket

rm -rf log