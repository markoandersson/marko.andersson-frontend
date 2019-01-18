<template>
  <div>
    <v-card light tile class="skill-card" height="5.5rem">
      <v-layout row>
        <v-flex xs4 v-if="skill.logo">
          <v-lazy-image
            v-bind:src="require('../images/' + this.skill.logo)"
          >
          </v-lazy-image>
        </v-flex>
        <v-flex :xs8="skill.logo ? true : false">
            <h4>{{skill.name}}</h4>
        </v-flex>
      </v-layout>
    </v-card>
  </div>
</template>

<script>
  import VLazyImage from 'v-lazy-image'

  export default {
    name: 'Skill',
    components: {
      VLazyImage
    },
    props: {
      skill: Object
    }
  }
</script>

<style scoped>

  .skill-card {
    margin: 0.5rem;
  }

  .skill-card img {
    width:100%;
    height:100%;
    object-fit: cover;
    overflow: hidden;
    max-height: 5rem;
  }
</style>
