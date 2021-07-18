#!/bin/bash
./wait-for-it.sh api:8000 -s -t 30000 -- echo 'api is up' \
&& echo 'Starting web...' && nginx -t && nginx -g 'daemon off;'