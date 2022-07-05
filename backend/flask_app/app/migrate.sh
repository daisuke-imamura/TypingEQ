#!/bin/bash

python3 -m flask db init
python3 -m flask db migrate -m "db start"
python3 -m flask db upgrade