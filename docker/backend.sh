#!/bin/bash

# turn on bash's job control
#set -m

cd BPjs-Debugger
git pull
mvn install -DskipTests 

cd controller
mvn spring-boot:run&

# now we bring the primary process back into the foreground
# and leave it there
#fg %1