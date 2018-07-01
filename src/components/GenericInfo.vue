<template>
  <div>
    <h1>Marko Andersson</h1>
    <p>{{ description }}</p>
  </div>
</template>

<script>
  export default {
    name: 'GenericInfo',
    data: () => ({
      description: 'Short description goes here'
    })
  };
</script>

<style scoped>

</style>
