<template>
  <SiteSection title="Languages">
    <v-layout row wrap>
      <v-flex xs12 md4>
        <Language language="JavaScript" level="Fluent">
          <img src="../images/javascript-logo.png" alt="Javascript">
        </Language>
      </v-flex>
      <v-flex xs12 md4>
        <Language language="Java" level="Fluent">
          <img src="../images/java-logo.png" alt="Java">
        </Language>
      </v-flex>
      <v-flex xs12 md4>
        <Language language="Python" level="Intermediate">
          <img src="../images/python-logo.png" alt="Python">
        </Language>
      </v-flex>
      <v-flex xs12 md4>
        <Language language="Finnish" level="Native">
          <img src="../images/lang-fi.png" alt="Finnish">
        </Language>
      </v-flex>
      <v-flex xs12 md4>
        <Language language="English" level="Business">
          <img src="../images/lang-en.png" alt="English">
        </Language>
      </v-flex>
      <v-flex xs12 md4>
        <Language language="Swedish" level="Beginner">
          <img src="../images/lang-se.png" alt="Swedish">
        </Language>
      </v-flex>
    </v-layout>
  </SiteSection>
</template>

<script>
  import Language from './Language'
  import SiteSection from './SiteSection'

  export default {
    name: 'LanguageSection',
    components: {
      Language,
      SiteSection
    }
  }
</script>

<style scoped>

</style>
