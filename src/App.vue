<template>
  <div id="app">
    <Header />
    <About v-bind:description="resume.basics.label" />
  </div>
</template>

<script>
  import {About, Header} from './components';
  import {getResumeAsJson} from './BackendApi';

  export default {
    name: 'app',
    components: {
      About,
      Header
    },
    data() {
      return {
        resume: {
          basics: {}
        },
        loading: true
      };
    },
    mounted() {
      getResumeAsJson().then((resume) => {
        this.resume = resume;
        this.loading = false;
      });
    }
  };
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
