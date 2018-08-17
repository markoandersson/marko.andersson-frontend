<template>
  <SiteSection title="About">
    {{description}}
  </SiteSection>
</template>

<script>
  import SiteSection from './SiteSection'

  export default {
    name: 'AboutSection',
    components: {
      SiteSection
    },
    props: {
      description: String
    }
  }
</script>

<style scoped>

</style>
