<template>
  <div class="container">
    <a href="https://www.linkedin.com/in/markoandersson/">
      <font-awesome-icon :icon="['fab', 'linkedin']" class="social linkedin" />
    </a>
    <a href="https://twitter.com/marko_andersson">
      <font-awesome-icon :icon="['fab', 'twitter']" class="social twitter" />
    </a>
    <a href="https://github.com/markoandersson">
      <font-awesome-icon :icon="['fab', 'github']" class="social github" />
    </a>
  </div>
</template>

<script>
  import {library} from '@fortawesome/fontawesome-svg-core';
  import {faGithub, faLinkedin, faTwitter} from '@fortawesome/free-brands-svg-icons';

  import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

  library.add(faTwitter, faGithub, faLinkedin);

  export default {
    name: 'SocialIcons',
    components: {
      'font-awesome-icon': FontAwesomeIcon
    }
  };
</script>

<style scoped>

  .container {
    margin-top: 16rem;
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
