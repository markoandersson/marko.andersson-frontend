<template>
  <Jumbotron fluid class="jumbo">
    <h1 class="text-white display-1 text-center align-middle">I'm Marko Andersson</h1>
    <h2 class="text-light">Jyväskylä, Finland based Java, Javascript, DevOps, Fullstack, Agile, Lean, Unicorn developer with no freetime for personal projects.</h2>
    <Button
      class="cv-button"
      href="https://api.markoandersson.info/resume.json"
    >Get my CV as JSON</Button>
  </Jumbotron>
</template>

<script>
  import Jumbotron from 'bootstrap-vue/es/components/jumbotron/jumbotron';
  import Button from 'bootstrap-vue/es/components/button/button';
  export default {
    name: 'Header',
    components: {
      Jumbotron,
      Button
    }
  }
</script>

<style scoped>

  .cv-button {
    margin-top: 2rem;
  }

  .jumbo {
    background-size: cover;
    background-repeat: no-repeat;
  }
  @media (min-width: 576px) {
    .jumbo {
      background-image: url("../images/header-normal.jpeg");
      height: 854px;
    }
  }

  @media (max-width: 576px) {
    .jumbo {
      background-image: url("../images/header-small.jpeg");
      height: 427px;
    }
  }

</style>
