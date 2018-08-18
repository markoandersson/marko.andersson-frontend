<template>
  <SiteSection title="Recommendations">

    <v-carousel hide-delimiters interval="10000" v-if="references.length > 0" class="carousel">
      <v-carousel-item v-for="reference in references" :key="reference.name">
        <v-card light class="card">
          <v-card-media
            :src="require('../images/stock/' + getRandomPicture())"
            height="300px"
          ></v-card-media>
          <v-card-text>
            <v-flex xs12 lg6 offset-lg3>
              {{reference.reference}}
            </v-flex>
          </v-card-text>
        </v-card>
      </v-carousel-item>
    </v-carousel>
  </SiteSection>
</template>

<script>
  import SiteSection from './SiteSection'
  import sample from 'lodash/sample'

  export default {
    name: 'RecommendationsSection',
    components: {
      SiteSection
    },
    props: {
      references: {
        type: Array,
        required: true
      }
    },
    methods: {
      getRandomPicture: function () {
        return sample([
          'pexels-photo-212286.jpeg',
          'pexels-photo-218863.jpeg',
          'pexels-photo-270348.jpeg',
          'pexels-photo-327533.jpeg',
          'pexels-photo-398532.jpeg',
          'pexels-photo-684385.jpeg',
          'pexels-photo-886465.jpeg',
          'pexels-photo-1040157.jpeg'
        ])
      }
    }
  }
</script>

<style scoped>

  .carousel {
    height: 40rem;
  }

  @include desktop {
    .carousel
    {
      height: 35rem;
    }
  }
  .card {
    height: 100%;
  }
</style>
