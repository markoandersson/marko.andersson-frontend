<template>
  <v-card tile class="py-3">
    <v-card-title primary-title>
      <v-flex xs12>
        <h2 class="mb-0">Languages</h2>
      </v-flex>
    </v-card-title>
    <v-card-text>
      <v-flex xs12 md10 offset-md1>
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
      </v-flex>
    </v-card-text>
  </v-card>

</template>

<script>
  import Language from './Language'

  export default {
    name: 'LanguageSection',
    components: {
      Language
    }
  }
</script>

<style scoped>
  .language-title {
    margin-bottom: 2rem;
  }

</style>
