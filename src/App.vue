<template>
  <div id="app">
    <Header />
    <About />

  </div>
</template>

<script>
  import {About, Header} from './components';

  export default {
    name: 'app',
    components: {
      About,
      Header
    }
  }
</script>

<style>
  @font-face {
    font-family: 'LeagueGothic';
    src: url("fonts/LeagueGothic-Regular.otf") format("opentype");
  }

  h1,h2 {
    font-family: 'LeagueGothic', sans-serif !important;
  }
  #app {
    font-family: 'Open Sans', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  @media (min-width: 576px) {
    html {
      font-size: 1rem;
    }
  }

  @media (max-width: 576px) {
    html {
      font-size: 0.8rem;
    }
  }
</style>
