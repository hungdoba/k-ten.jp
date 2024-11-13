# Common Prisma Commands

Prisma is an ORM (Object-Relational Mapping) tool that simplifies database interactions. Here are some common Prisma commands:

## Install Prisma and Prisma Client

To install Prisma and the Prisma Client using Yarn, run the following command:

```sh
yarn add prisma @prisma/client
```

## Initialize Prisma

```sh
npx prisma init
```

## Generate Prisma Client

```sh
npx prisma generate
```

## Migrate Database

```sh
npx prisma migrate dev --name <migration_name>
```

## Introspect Database

```sh
npx prisma db pull
```

## Seed Database

```sh
npx prisma db seed
```

## Open Prisma Studio

```sh
npx prisma studio
```

## Format Prisma Schema

```sh
npx prisma format
```

## Check for Issues

```sh
npx prisma validate
```

## Reset Database

```sh
npx prisma migrate reset
```

These commands help you manage your database schema, generate the Prisma client, and perform various database operations.
