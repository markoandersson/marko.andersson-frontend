<template>
  <SiteSection title="Languages">
    <v-layout row wrap>
      <v-flex xs12 md4>
        <Language language="JavaScript" level="Fluent">
          <img src="../images/javascript-logo.png">
        </Language>
      </v-flex>
      <v-flex xs12 md4>
        <Language language="Java" level="Fluent">
          <img src="../images/java-logo.png">
        </Language>
      </v-flex>
      <v-flex xs12 md4>
        <Language language="Python" level="Intermediate">
          <img src="../images/python-logo.png">
        </Language>
      </v-flex>
      <v-flex xs12 md4>
        <Language language="Finnish" level="Native">
          <img src="../images/lang-fi.png">
        </Language>
      </v-flex>
      <v-flex xs12 md4>
        <Language language="English" level="Business">
          <img src="../images/lang-en.png">
        </Language>
      </v-flex>
      <v-flex xs12 md4>
        <Language language="Swedish" level="Beginner">
          <img src="../images/lang-se.png">
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
  .language-title {
    margin-bottom: 2rem;
  }

</style>
