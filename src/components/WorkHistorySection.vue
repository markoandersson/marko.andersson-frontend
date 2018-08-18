<template>

  <SiteSection title="Job history">
    <section class="timeline">
      <div class="container">

        <div class="timeline-item" v-for="work in works" :key="work.startDate">
          <div class="timeline-img"></div>
          <div class="timeline-content">
            <v-card light flat>
              <v-card-media
                :src="require('../images/' + logo(work.company))"
                height="200px"
                contain
              ></v-card-media>
              <v-card-title primary-title>
                <h1 class="title">{{work.position}}</h1>
              </v-card-title>
              <v-card-title>
                <span class="grey--text">{{work.company}}</span>
              </v-card-title>
              <v-card-title>
                <span class="grey--text">{{work.startDate}}</span>
              </v-card-title>

            </v-card>
          </div>
        </div>

      </div>
    </section>
  </SiteSection>

</template>

<script>
  import SiteSection from './SiteSection'
  import truncate from 'lodash/truncate'

  export default {
    name: 'WorkHistorySection',
    components: {
      SiteSection
    },
    props: {
      works: {
        type: Array,
        required: true,
        default: () => {
          return []
        }
      }
    },
    methods: {
      logo: function (company) {
        if (company.includes('Solteq')) return 'solteq-logo.png'
        if (company.includes('Star Arcade')) return 'stararcade-logo.png'
        if (company.includes('Kilosoft')) return 'kilosoft-logo.jpg'
        if (company.includes('University of Jyväskylä')) return 'jyu-logo.jpg'
      },
      shorten: function (text) {
        return truncate(text, {
          length: 100,
          separator: ' '
        })
      },
    },
  }
</script>

<style scoped lang="scss">

  @import "../variables.scss";

  $primary: #009688;
  $dark-primary: #303F9F;
  $light-primary: #C5CAE9;
  $text: #FFFFFF;
  $primary-text: #212121;
  $secondary-text: #757575;
  $accent: #FF4081;

  section {
    padding: 100px 0;
  }

  .timeline {

    position: relative;

    &::before {
      content: '';
      background: $light-primary;
      width: 5px;
      height: 95%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  .timeline-item {
    width: 100%;
    margin-bottom: 70px;

    &:nth-child(even) {

      .date {
        position: relative;
        left: -7rem;
      }

      .timeline-content {
        float: right;

        &::after {
          content: '';
          position: absolute;
          border-style: solid;
          width: 0;
          height: 0;
          top: 30px;
          left: -15px;
          border-width: 10px 15px 10px 0;
          border-color: transparent #f5f5f5 transparent transparent;
        }
      }
    }

    &::after {
      content: '';
      display: block;
      clear: both;
    }
  }

  .timeline-content {
    position: relative;
    width: 45%;
    border-radius: 4px;
    background: #fff;
    box-shadow: 0 20px 25px -15px rgba(0, 0, 0, .3);

    &::after {
      content: '';
      position: absolute;
      border-style: solid;
      width: 0;
      height: 0;
      top: 30px;
      right: -15px;
      border-width: 10px 0 10px 15px;
      border-color: transparent transparent transparent #f5f5f5;
    }
  }

  .timeline-img {
    width: 30px;
    height: 30px;
    background: $primary;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    margin-top: 25px;
    margin-left: -15px;
  }

  a {
    background: $primary;
    color: $text;
    padding: 8px 20px;
    text-transform: uppercase;
    font-size: 14px;
    margin-bottom: 20px;
    margin-top: 10px;
    display: inline-block;
    border-radius: 2px;
    box-shadow: 0 1px 3px -1px rgba(0, 0, 0, .6);

    &:hover, &:active, &:focus {
      background: darken($primary, 10%);
      color: $text;
      text-decoration: none;
    }

  }

  .timeline-card {
    padding: 0 !important;

    p {
      padding: 0 20px;
    }

    a {
      margin-left: 20px;
    }
  }

  .timeline-img-header {

    height: 200px;
    position: relative;
    margin-bottom: 20px;

    h2 {
      color: $text;
      position: absolute;
      bottom: 5px;
      left: 20px;
    }
  }

  blockquote {
    margin-top: 30px;
    color: $secondary-text;
    border-left-color: $primary;
    padding: 0 20px;
  }

  .date {
    display: inline-block;
    color: $text;
    padding: 10px;
    position: relative;
    left: 2rem;
  }

  @include mobile {

    .timeline {

      &::before {
        left: 50px;
      }

      .timeline-img {
        left: 50px;
      }

      .timeline-content {
        max-width: 100%;
        width: auto;
        margin-left: 70px;
      }

      .timeline-item {

        &:nth-child(even) {

          .timeline-content {
            float: none;

          }
        }

        &:nth-child(odd) {

          .timeline-content {

            &::after {
              content: '';
              position: absolute;
              border-style: solid;
              width: 0;
              height: 0;
              top: 30px;
              left: -15px;
              border-width: 10px 15px 10px 0;
              border-color: transparent #f5f5f5 transparent transparent;
            }
          }

        }
      }
    }

  }

</style>
