<template>
  <div id="app">
    <GenericInfo />

  </div>
</template>

<script>
import {GenericInfo} from './components';

export default {
  name: 'app',
  components: {
    GenericInfo

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
  margin-top: 60px;
}
</style>
