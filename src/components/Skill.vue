<template>
  <div>
    <v-card light tile class="skill-card" height="5.5rem">
      <v-layout>
        <v-flex xs4 v-if="skill.logo">
          <v-img
            v-bind:src="require('../images/' + this.skill.logo)"
            height="100%"
            contain
            class="icon"
            max-height="5rem"
          >
          </v-img>
        </v-flex>
        <v-flex :xs8="skill.logo ? true : false">
          <v-card-title primary-title>
            <h4>{{skill.name}}</h4>
          </v-card-title>
        </v-flex>
      </v-layout>
    </v-card>
  </div>
</template>

<script>
  export default {
    name: 'Skill',
    props: {
      skill: Object
    }
  }
</script>

<style scoped>

  .skill-card {
    margin: 0.5rem;
  }

</style>
