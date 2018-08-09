<template>
  <v-card tile class="py-3">
    <v-card-title primary-title >
      <v-flex xs12>
        <h2 class="mb-0">About</h2>
      </v-flex>
    </v-card-title>
    <v-card-text>
      <v-flex xs12 md10 offset-md1>
        {{ description }}
      </v-flex>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    name: 'AboutSection',
    props: {
      description: String
    }
  }
</script>

<style scoped>

</style>
