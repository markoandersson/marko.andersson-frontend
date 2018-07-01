# Frontend for my professional website

Website that contains some generic information about me and my career. Mostly this is exercise project for learning [Vue.js](https://vuejs.org/)

## Tech stack

- [Vue.js](https://vuejs.org/) - for building the front-end
- [Travis-CI](https://travis-ci.org/) - for continuous integration and deployment
- [AWS S3](https://aws.amazon.com/s3) - S3 static website hosting for hosting the site

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
