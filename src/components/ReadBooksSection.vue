<template>
  <SiteSection title="Read books">
    <p>I try to read books to gain new insights into different aspects of software development. They can be either
      technical, project management or soft skills. Here are some of them listed.</p>

    <v-carousel hide-delimiters interval="4000" v-if="books.length > 0" class="carousel">
      <v-carousel-item lazy
        v-for="book in books"
        :key="book.title"
        :src="book.image"
      >
      </v-carousel-item>
    </v-carousel>
  </SiteSection>
</template>

<script>
  import SiteSection from './SiteSection'

  export default {
    name: 'ReadBooksSection',
    components: {
      SiteSection
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

  .carousel {
    height: 30rem;
    width: 20rem;
    margin-left: auto;
    margin-right: auto;
  }

</style>
