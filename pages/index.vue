<template>
  <div>
    <Header></Header>
    
    <Footer></Footer>
  </div>
</template>

<script>
  import {
    getPosts
  } from '~/api/post'

  export default {
    async asyncData() {
      const posts = await getPosts()
      return {
        posts
      }
    }
  }
</script>

<style>
  *{
      font-family: 'Quicksand', sans-serif !important;
  }
</style>