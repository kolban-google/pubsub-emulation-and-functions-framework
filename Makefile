# Makefile for demo of PubSub emulation in conjunction with Functions Framework.

PATH := google-cloud-sdk/bin:$(PATH)

all:
	@echo "start-pubsub  - Start the PubSub emulator"
	@echo "start-functions-framework - Start the functions framework environment"
	@echo "create-pubsub - Create the PubSub resources"
	@echo "publish       - Publish a PubSub message"
	@echo "build         - Build the environment"

start-pubsub:
	gcloud beta emulators pubsub start --project=my-project --host-port=localhost:8085

start-functions-framework:
	npx functions-framework --target=handleMessage --port=8086 --signature-type=event

create-pubsub:
	$$(gcloud beta emulators pubsub env-init); \
	export GOOGLE_CLOUD_PROJECT="my-project"; \
	node create.js

publish:
	$$(gcloud beta emulators pubsub env-init); \
	export GOOGLE_CLOUD_PROJECT="my-project"; \
	node publish.js

build:
	apt-get install wget python3 default-jdk curl -y
	wget https://dl.google.com/dl/cloudsdk/channels/rapid/downloads/google-cloud-sdk-302.0.0-linux-x86_64.tar.gz
	tar -xf google-cloud-sdk-302.0.0-linux-x86_64.tar.gz
	rm google-cloud-sdk-302.0.0-linux-x86_64.tar.gz
	curl -sL https://deb.nodesource.com/setup_14.x | bash -
	apt-get install -y nodejs
	npm install
	gcloud components install beta pubsub-emulator --quiet


