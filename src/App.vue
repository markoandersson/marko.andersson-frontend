<template>
  <div id="app">
    <v-app dark>
      <v-content>
        <v-container fluid>
          <v-layout
            column
            wrap
          >
            <section>
              <Header v-bind:social="resume.basics.profiles" />
            </section>
            <section>
              <About v-bind:description="resume.basics.label" />
            </section>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
  import {About, Header} from './components'
  import {getResumeAsJson} from './BackendApi'

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
      }
    },
    mounted() {
      getResumeAsJson().then((resume) => {
        this.resume = resume
        this.loading = false
      })
    }
  }
</script>

<style>
  @font-face {
    font-family: 'LeagueGothic';
    src: url("fonts/LeagueGothic-Regular.otf") format("opentype");
  }

  h1, h2 {
    font-family: 'LeagueGothic', sans-serif !important;
  }

  h1 {
    font-size: 6rem;
  }

  h2 {
    font-size: 3rem;
  }

  h3 {
    font-size: 1.6rem;
  }

  #app {
    font-family: 'Open Sans', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }

  @media (min-width: 576px) {
    html {
      font-size: 1rem !important;
    }
  }

  @media (max-width: 576px) {
    h1 {
      font-size: 4rem;
    }

    h2 {
      font-size: 2.4rem;
    }

    h3 {
      font-size: 1.4rem;
    }
  }
</style>
