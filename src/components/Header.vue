<template>
  <v-parallax class="jumbo" height="">
    <v-layout column
              align-center
              justify-space-around
              class="white--text">
      <v-flex xs12>
        <h1>I'm Marko Andersson</h1>
        <h3>Jyväskylä, Finland based Java, Javascript, DevOps, Fullstack, Agile, Lean, Unicorn
          developer trapped inside corporation and with no freetime for personal projects.</h3>
      </v-flex>
      <v-flex xs12>
        <v-btn large dark
               class="cv-button"
               href="https://api.markoandersson.info/resume.json"
        >Get my CV as JSON
        </v-btn>
      </v-flex>
      <v-flex xs12>
        <social-icons v-bind:data="social" />
      </v-flex>
    </v-layout>
  </v-parallax>
</template>

<script>
  import SocialIcons from './SocialIcons'

  export default {
    name: 'Header',
    props: {
      social: Array
    },
    components: {
      SocialIcons
    }
  }
</script>

<style scoped lang="scss">

  @import "../variables";

  .cv-button {
    margin-top: 2rem;
  }

  .jumbo {
    background-size: cover;
    background-repeat: no-repeat;
  }

  @include desktop {
    .jumbo {
      background-image: url("../images/header-normal.jpeg");
      height: 854px;
    }
  }

  @include mobile {
    .jumbo {
      background-image: url("../images/header-small.jpeg");
      height: 427px;
    }
  }

</style>
