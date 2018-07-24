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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
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
