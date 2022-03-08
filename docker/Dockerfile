FROM node:17-bullseye-slim

WORKDIR /app

COPY *.sh ./

RUN apt-get update && apt-get upgrade \
	&& apt-get install -y git build-essential openjdk-11-jdk maven \
	&& npm install --unsafe-perm -g node-sass serve

RUN git clone https://github.com/bThink-BGU/BPjs-React-IDE.git \
	&& cd BPjs-React-IDE \
	&& npm install --production \
	&& npm run build \
	&& cd .. \
	&& git clone https://github.com/bThink-BGU/BPjs-Debugger.git \
	&& cd BPjs-Debugger \
	&& mvn install -DskipTests 

EXPOSE 80
EXPOSE 8080

# Run the application
CMD ./run.sh