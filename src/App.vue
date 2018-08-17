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
              <AboutSection v-bind:description="resume.basics.label" />
            </section>
            <section>
              <SkillsSection v-bind:skills="enhancedSkills" />
            </section>
            <section>
              <LanguageSection />
            </section>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
  import {AboutSection, Header, SkillsSection, LanguageSection} from './components'
  import {getResumeAsJson} from './BackendApi'
  import {enrichSkills} from './Skills'

  export default {
    name: 'app',
    components: {
      LanguageSection,
      AboutSection,
      SkillsSection,
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
    },
    computed: {
      enhancedSkills: function () {
        return enrichSkills(this.resume.skills)
      }
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

  h4 {
    font-size: 1.1rem;
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
