<template>
  <v-card tile class="py-3 section">
    <v-card-title primary-title>
      <v-flex xs12>
        <h2 class="mb-0">{{title}}</h2>
      </v-flex>
    </v-card-title>
    <v-card-text>
      <v-flex xs12 md10 offset-md1>
        <slot></slot>
      </v-flex>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    name: 'SiteSection',
    props: {
      title: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped>
  .section {
    margin-bottom: 2rem;
  }
</style>
