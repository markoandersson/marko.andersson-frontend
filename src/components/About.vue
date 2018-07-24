<template>
  <Jumbotron fluid header="About">
    <LoadingSpinner v-if="loading"/>
    <p v-else>{{ description }}</p>
  </Jumbotron>
</template>

<script>
  import {RotateSquare as LoadingSpinner} from 'vue-loading-spinner';
  import Jumbotron from 'bootstrap-vue/es/components/jumbotron/jumbotron';
  import {getDescription} from './BackendApi';
  export default {
    name: 'About',
    components: {
      LoadingSpinner,
      Jumbotron
    },
    data() {
      return {
        description: '',
        loading: true
      };
    },
    mounted() {
      this.loading = true;
      getDescription().then((description) => {
        this.description = description;
        this.loading = false;
      });
    }
  };
</script>

<style scoped>

</style>
