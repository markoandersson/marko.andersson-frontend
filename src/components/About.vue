<template>
  <Jumbotron fluid header="About">
    <p>{{ description }}</p>
  </Jumbotron>
</template>

<script>
  import Jumbotron from 'bootstrap-vue/es/components/jumbotron/jumbotron';
  export default {
    name: 'About',
    props: {
      description: String
    },
    components: {
      Jumbotron
    }
  };
</script>

<style scoped>

</style>
