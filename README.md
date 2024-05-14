# Posts Details API

This API provides an endpoint to fetch a paginate list of detailed posts. Every post in the list will contain its comments and its author. All information comes from https://jsonplaceholder.typicode.com endpoints.

## Tech Stack

This project is written in NodeJS using Javascript, it also uses express as route manager library.

## Project Structure

The folder structure has three main folders:

#### `services`

  - This folder container all business logic of the application. Each service should contain only one responsibility.

#### `lib`

  - This folder container internal code used to support the rest of the application.

#### `infra`

  - This folder contains every implementation specific code that is used in the application but comes from an external dependency.

Other folders are:

#### `server`
  - Contains http server configuration and routes definitions

The `setupContainer` file is responsible for registering the providers that can be used to be injected in the application.

The `main.js` file is responsible for starting the application and the server.

## Running

There are 2 scripts available to run this project:

- `start` recommended pro production, will run the project using node.
- `dev` recommended for dev environment, will run the project using nodemon, providing an auto refresh server that will reload the code every time a file change.

## Possible Improvements

Some improvements that would make this project more reliable and scalable includes:

- Automated unit and integration testing.
- TypeScript to ensure contracts and interfaces between different layers
- Schema validation for requests to ensure the structure of the body/query params.
