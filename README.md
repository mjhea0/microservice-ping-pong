# Microservice Ping Pong

http://mherman.org/presentations/microservice-ping-pong

## Want to learn how to build this project?

Check out the [blog post](http://mherman.org/blog/2017/11/16/docker-on-aws-from-containerization-to-orchestration).

## Want to use this project?

1. Fork/Clone this repo

1. Download [Docker](https://docs.docker.com/docker-for-mac/install/) (if necessary)

1. Make sure you are using a Docker version >= 17:

    ```sh
    $ docker -v
    Docker version 17.09.0-ce, build afdb6d4
    ```

1. Set the environment variables:

    ```sh
    $ export REACT_APP_BASE_URL=http://DOCKER_MACHINE_IP
    ```

1. Build and tag the `node-base` image:

    ```sh
    $ docker build -t node-base ./services/node
    ```

1. Fire up the containers

    ```sh
    $ docker-compose up -d --build
    ```

1. Lint and test:

    ```sh
    $ docker-compose run node-john gulp lint
    $ docker-compose run node-john npm test
    ```

![](./ping.png)
