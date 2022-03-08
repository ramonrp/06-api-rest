# API REST LAB

## Description

This is proyect from the master front-end of Lemoncode. You need to start with a [boilerplate](https://github.com/Lemoncode/master-frontend-lemoncode/tree/master/06-rest-api/01-concepts/00-boilerplate) and make next changes:

- Adapt existing architecture to new project to show to pages, one a character collection and a second one with character detail.
- Use [ricky morty API REST](https://rickandmortyapi.com/documentation/#rest) to get data of character collection and character details.
- Complete same challenge using [ricky morty GRAPHQL API](https://rickandmortyapi.com/documentation/#graphql)
- Use [live-server](https://www.npmjs.com/package/live-server) package to simulate an API rest. Create api methods using fetch or axios in order to create, or modify data.

## Result

I solved each challenge in a different branch in order to keep them separate and accessible.

## Instalation

Clone repository and and install dependencies:

```sh
npm i
```

This automatically run postinstall script, to install also live-server dependencies.

## Usage

### Development server

```bash
npm start
```

You can view the development server at `localhost:8080` and live server at `localhost:3000`

### Production build

```bash
npm run build:prod
```

Production files goes to /dist folder

### Production dev

```bash
npm run build:dev
```

## Author

- [Ramon Ruiz](https://github.com/ramonrp)
