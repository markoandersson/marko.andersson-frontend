<template>
  <SiteSection title="Blog posts">
    <v-flex xs12 lg8 offset-lg2>
      <v-list three-line class="posts">
        <template v-for="(post, index) in orderedPosts">
          <v-list-tile
            :key="post.title"
            avatar
            ripple
            :href="post.link"
          >
            <v-list-tile-avatar size="70" class="avatar">
              <img :src="post.image">
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{ post.title }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ post.description }}</v-list-tile-sub-title>
              <v-list-tile-sub-title>{{ post.date }}</v-list-tile-sub-title>
            </v-list-tile-content>

          </v-list-tile>
          <v-divider
            v-if="index + 1 < posts.length"
            :key="index"
          ></v-divider>
        </template>
      </v-list>
    </v-flex>
  </SiteSection>
</template>

<script>
  import SiteSection from './SiteSection'
  import sortBy from 'lodash/sortBy'
  import moment from 'moment'

  export default {
    name: 'BlogPostsSection',
    components: {
      SiteSection
    },
    data() {
      return {
        posts: [
          {
            title: 'Securing Microservices with JWT tokens',
            date: '2016-10-11',
            description: 'Using JWT tokens to authenticate and authorize users in Microservice architecture',
            link: 'https://dev.solteq.com/2016/10/11/securing-microservices-with-jwt-tokens/',
            image: 'https://dev.solteq.com/images/padlocks.jpg',
            source: 'Solteq Developer blog'
          },
          {
            title: 'From Idea to Production in 37 Minutes',
            date: '2016-12-18',
            description: 'What it takes to implement customer\'s idea into production just in 37 minutes',
            link: 'https://dev.solteq.com/2016/12/28/from-idea-to-production-in-37-minutes/',
            image: 'https://dev.solteq.com/images/2016-11-02/stop-this-watch.jpg',
            source: 'Solteq Developer blog'
          },
          {
            title: 'JWT Tokens Revisited',
            date: '2017-02-13',
            description: 'This post is a follow-up to the previous `Securing Microservices with JWT Tokens`',
            link: 'https://dev.solteq.com/2017/02/13/jwt-tokens-revisited/',
            image: 'https://dev.solteq.com/images/padlocks.jpg',
            source: 'Solteq Developer blog'
          },
          {
            title: 'State-of-the-art deployment pipeline',
            date: '2018-03-16',
            description: 'What does it take to release multiple times per day?',
            link: 'https://dev.solteq.com/2018/03/16/state-of-the-art-pipeline/',
            image: 'https://dev.solteq.com/images/state-of-the-art-pipeline/pipeline.jpg',
            source: 'Solteq Developer blog'
          }
        ]
      }
    },
    computed: {
      orderedPosts: function () {
        return sortBy(this.posts, (e) => {
            return moment(e).unix()
        })
      }
    }
  }
</script>

<style scoped lang="scss">

  .avatar {
    margin-right: 3rem;
    position: relative;
    top: 1rem;
  }
</style>
