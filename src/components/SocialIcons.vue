<!--suppress CssUnusedSymbol -->
<template>
  <v-layout align-center justify-center row class="container">
    <span v-for="item in data" v-bind:key="item.network">
      <a v-bind:href="item.url">
        <font-awesome-icon :icon="getSocialIcon(item)" :class="getSocilaClass(item)" />
      </a>
    </span>
  </v-layout>
</template>

<script>
  import {library} from '@fortawesome/fontawesome-svg-core';
  import {faGithub, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons';

  import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

  library.add(faTwitter, faGithub, faLinkedin);

  export default {
    name: 'SocialIcons',
    props: {
      data: Array
    },
    components: {
      'font-awesome-icon': FontAwesomeIcon
    },
    methods: {
      getSocialIcon: (item) => {
        return ['fab', item.network.toLowerCase()];
      },
      getSocilaClass: (item) => {
        return 'social ' + item.network.toLowerCase();
      }
    }
  };
</script>

<style scoped>

  .container {
    margin-top: 8rem;
  }

  .social {
    opacity: 0.7;
    width: 80px;
    height: 80px;
    padding: 10px;
    color: white;
    margin-right: 1rem;
    border-radius: 50%;
    background-color: dimgray;
  }

  @media (max-width: 576px) {
    .social {
      width: 50px;
      height: 50px;
      padding: 10px;
    }

    .container {
      margin-top: 6rem;
    }
  }

  .social:hover {
    opacity: 1;
  }

  .twitter:hover {
    background-color: #32b9e7;
  }

  .linkedin:hover {
    background-color: #0087be;
  }

  .github:hover {
    background-color: #333333;
  }
</style>
