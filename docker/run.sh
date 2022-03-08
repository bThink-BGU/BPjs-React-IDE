#!/bin/bash

# turn on bash's job control
set -m

./backend.sh &

./frontend.sh

# now we bring the primary process back into the foreground
# and leave it there
fg %1