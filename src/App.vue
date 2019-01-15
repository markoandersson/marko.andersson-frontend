<template>
  <div id="app">
    <v-app dark>
      <v-progress-linear :indeterminate="true" v-if="loading"></v-progress-linear>
      <v-content v-if="!loading">
        <v-container fluid>
          <v-layout
            column
            wrap
          >
            <section>
              <Header v-bind:social="resume.basics.profiles" v-bind:label="resume.basics.label" />
            </section>
            <section>
              <AboutSection v-bind:description="resume.basics.summary" />
            </section>
            <section>
              <SkillsSection v-bind:skills="enhancedSkills" />
            </section>
            <section>
              <LanguageSection />
            </section>
            <section>
              <RecommendationsSection :references="resume.references" />
            </section>
            <section>
              <BlogPostsSection />
            </section>
            <section>
              <ReadBooksSection :books="books"/>
            </section>
            <section>
              <WorkHistorySection :works="resume.work" />
            </section>
          </v-layout>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
  import {
    AboutSection,
    BlogPostsSection,
    Header,
    LanguageSection,
    RecommendationsSection,
    SkillsSection,
    WorkHistorySection,
    ReadBooksSection
  } from './components'
  import {getReadBooks, getResumeAsJson} from './BackendApi'
  import {enrichSkills} from './Skills'

  export default {
    name: 'app',
    components: {
      BlogPostsSection,
      RecommendationsSection,
      WorkHistorySection,
      LanguageSection,
      AboutSection,
      SkillsSection,
      Header,
      ReadBooksSection
    },
    data() {
      return {
        resume: {
          basics: {},
          references: []
        },
        books: [],
        loading: true
      }
    },
    mounted() {
      getResumeAsJson().then((resume) => {
        this.resume = resume
        this.loading = false
      })
      getReadBooks().then((books) => {
        this.books = books
      })
    },
    computed: {
      enhancedSkills: function () {
        return enrichSkills(this.resume.skills)
      }
    }
  }
</script>

<style lang="scss">

  @import "variables";

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

  @include desktop {
    html {
      font-size: 1rem !important;
    }
  }

  @include mobile {
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
