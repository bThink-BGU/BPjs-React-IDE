#!/bin/bash

# turn on bash's job control
set -m

cd BPjs-React-IDE 
git pull
npm install --production 
npm run build

#export PORT=80
serve -s build -p 80
#npm start

# now we bring the primary process back into the foreground
# and leave it there
fg %1