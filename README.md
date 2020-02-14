# node-babel-boilerplate

Minimal boilercode to kickstart your Node.js project using Babel and ES6.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Before running the project on your system, make sure you have the following software installed.

- [yarn](https://yarnpkg.com) - fast and reliable dependency management from Facebook
- [Docker](https://docker.com) - OS level virtualization to deliver packages called containers _(optional)_

### Installing

Before running the program make sure you have the `.env` file in the root directory of the project.

```
VALUE="<CHANGEME>"
```

The program can be run in "development" mode for testing and development purposes using the following command:

```
yarn start:dev
```

## Deployment

The code is written to run in the local and as well as in containerized environment.

Build the project using the following command:

```
yarn build
```

The project can be run in local environment using:

```
yarn start
```

Or build the Docker image using the following command:

```
docker build -t <<CHANGEME>>> .
```

And run the container using the following command:

```
docker run -it <<CHANGEME>>
```

## Technologies

- [Babel](https://babeljs.io) - Compile JavaScript to a primitive version
- [Docker](https://docker.com) - OS level virtualization

## Authors

- **Wahaj Aayani** - _Initial work_ - [aayani](https://gitlab.com/aayani)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
