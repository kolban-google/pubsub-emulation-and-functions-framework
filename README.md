# PubSub emulation and Functions Framework
This repository contains artifacts to be used in conjunction with the PubSub emulation and Functions
Framework Medium article.

Contained with is a Makefile which performs the majority of tasks.

We assume you are starting from a virgin environment such as a Docker container based on Debian.

We would start by running:

```
apt-get install make git
```

Then we would download a clone of our repository:

```
git clone https://github.com/kolban-google/pubsub-emulation-and-functions-framework.git
```

Now we have an environment ready to work with.

```
make build
```

This will create an environment ready for us to work against.  At the highest level, it will:

* Install Java SDK
* Install Google Cloud SDK
* Install NodeJS
* Install the npm dependencies for our tests

To perform our tests, we will need a few terminal windows:

* One to run `make start-pubsub`
* One to run `make start-functions-framework`
* One to run `make publish` (after running `make create-pubsub`)