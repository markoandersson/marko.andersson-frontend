<template>
  <div>
    <h1>Marko Andersson</h1>

    <LoadingSpinner v-if="loading"/>
    <p v-else>{{ description }}</p>
  </div>
</template>

<script>
  import {RotateSquare as LoadingSpinner} from 'vue-loading-spinner';
  import {getDescription} from './BackendApi';
  export default {
    name: 'GenericInfo',
    components: {
      LoadingSpinner
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
