# Tails Stores

## Overview
Tails Stores is a very simple search application that reads information about stores from a json file and queries the stores based on postcode and the name of the store. It's made up of a server application built in Python and a client application built in React (TypeScript).

## Technologies
### Server
1. Python
2. Flask

### Client
1. React

### Containerization
1. Docker

## Set up
1. Clone the repository
2. Ensure you have Docker and Docker Compose installed on your local machine
3. In the root directory of the project, run the following command to build the docker container and start the server and client applications:
```
  $ docker-compose up
```
4. Open your browser to `http://localhost:3000` to access the client side application
