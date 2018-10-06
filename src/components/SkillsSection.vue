<template>
  <SiteSection title="Skills">
    <v-container grid-list-md fill-height>
      <v-layout wrap>
        <v-flex d-flex md4 xs12 v-for="(skill, index) in sortedSkills" :key="skill.name" v-if="index < 9 || showMore">
          <Skill :skill="skill" />
        </v-flex>
        <v-flex xs12>
          <v-btn v-on:click.once="showAll" v-if="!showMore">Show more</v-btn>
        </v-flex>
      </v-layout>
    </v-container>
  </SiteSection>
</template>

<script>
  import Skill from './Skill'
  import SiteSection from './SiteSection'
  import sortBy from 'lodash/sortBy'
  import partition from 'lodash/partition'

  export default {
    name: 'SkillsSection',
    data() {
      return {
        showMore: false
      }
    },
    components: {
      Skill,
      SiteSection
    },
    props: {
      skills: {
        type: Array,
        default:
          () => {
            return []
          }
      }
    },
    computed: {
      sortedSkills: function () {
        const [skillsWithDescription, otherSkills] = partition(this.skills, 'logo')

        return [
          ...sortBy(skillsWithDescription, 'name'),
          ...sortBy(otherSkills, 'name')
        ]
      }
    },
    methods: {
      showAll: function () {
        this.showMore = true
      }
    }
  }
</script>

<style scoped>

</style>
