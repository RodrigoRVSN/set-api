# This project is a API for a university project

# 🔨 Technologies

- Nestjs - `Nodejs framework`
- PrismaORM - `ORM to manipulate the database`
- MySQL - `database`
- Passport - `Implement JWT strategy`
- Bcrypt - `Encrypt password`
- JWT auth guard - `JWT Authentication`
- Docker - `run local MySQL database`
- Planetscale - `deploy the database`
- Railway - `deploy the node server`
- Swagger UI - `auto generated documentation`

___

## Installation

```bash
$ yarn
```

## Generate a local MYSQL database with Docker (don't forget to add the database URL in `.env` file)

```bash
$ docker-compose up
```

## Generate Prisma migration in your database

```bash
$ yarn pm
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

### See others commands in `package.json` scripts

## Test

```bash
# unit tests
$ yarn test

# e2e tests
$ yarn test:e2e

# test coverage
$ yarn test:cov
```