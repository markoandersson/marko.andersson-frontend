<template>
  <v-layout column class="container">
    <h3 class="language-title">{{language}}</h3>
    <span>
      <v-progress-circular
        :rotate="118"
        :size="170"
        :width="15"
        :value="progressValue"
        color="teal"
        class="progress"
      >
        <v-avatar size="128">
         <slot></slot>
        </v-avatar>
      </v-progress-circular>
    </span>
    <span>{{level}}</span>
  </v-layout>

</template>

<script>
  export default {
    name: 'Language',
    props: {
      language: {
        type: String,
        required: true
      },
      level: {
        type: String,
        required: true
      },
    },
    computed: {
      progressValue: function () {
        const level = this.level.toLowerCase()

        const values = {
          'fluent': 85,
          'native': 85,
          'business': 58,
          'intermediate': 42,
          'beginner': 20
        }

        return values[level]
      }
    }
  }
</script>

<style scoped>
  .container {
    margin-bottom: 3rem;
  }

  .language-title {
    margin-bottom: 1rem;
  }

</style>
