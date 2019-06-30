# Frontend for my professional website

[![Build Status](https://travis-ci.org/markoandersson/marko.andersson-frontend.svg?branch=master)](https://travis-ci.org/markoandersson/marko.andersson-frontend)

Website that contains some generic information about me and my career. Mostly this is exercise project for learning [Vue.js](https://vuejs.org/)

Take a look at [markoandersson.info](https://markoandersson.info)

## Tech stack

- [Vue.js](https://vuejs.org/) - for building the front-end
- [Travis-CI](https://travis-ci.org/) - for continuous integration and deployment
- [AWS S3](https://aws.amazon.com/s3) - S3 static website hosting for hosting the site
- [JSON Resume](https://jsonresume.org/) - Provides schema for resume in JSON-format

## Local development

Install [vue-cli](https://github.com/vuejs/vue-cli)

```bash
npm install -g @vue/cli
```

Install NPM dependencies

```bash
npm install
```
Run development server

```bash
npm run serve
```

## Run unit tests

```bash
npm run test:unit
```

## Deployment

Uses "deploy on green" method. When commit gets pushed to `master`, unit tests are executed by Travis-CI, if tests pass, site gets automatically deployed to AWS S3.
