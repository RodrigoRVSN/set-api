# This project is a API for a university project

# 🔨 Technologies

- Nestjs (Nodejs framework)
- PrismaORM
- MySQL database
- Passport
- Bcrypt
- JWT auth guard
- Docker
- [TO REFINE] Deploy of node and database

___

## Installation

```bash
$ npm install
```

## Generate a local MYSQL database with Docker (don't forget to add the database URL in .env file)

```bash
$ docker-compose up
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```