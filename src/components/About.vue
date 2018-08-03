<template>
  <v-card>
    <v-card-title primary-title>
      <div>
        <h2 class="mb-0">About</h2>
      </div>
    </v-card-title>
    <v-card-text>
      <p>{{ description }}</p>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    name: 'About',
    props: {
      description: String
    }
  };
</script>

<style scoped>

</style>
