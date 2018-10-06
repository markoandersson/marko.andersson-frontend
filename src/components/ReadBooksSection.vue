<template>
    <SiteSection title="Read books">
      <carousel-3d height="500" :controls-visible="true">
        <slide v-for="(book, i) in books" :index="i" :key="i">
          <template slot-scope="{ index, isCurrent, leftIndex, rightIndex }">
            <img :data-index="index" :class="{ current: isCurrent, onLeft: (leftIndex >= 0), onRight: (rightIndex >= 0) }" :src="book.image">
          </template>
        </slide>
      </carousel-3d>
    </SiteSection>
</template>

<script>
  import { Carousel3d, Slide } from 'vue-carousel-3d'
  import SiteSection from './SiteSection'
  export default {
    name: 'ReadBooksSection',
    components: {
      SiteSection,
      Carousel3d,
      Slide
    },
    props: {
      books: {
        type: Array,
        required: true,
        default: () => {
          return []
        }
      }
    }
  }
</script>

<style scoped>

</style>
