<template>
  <ul>
      <li v-for="(post, index) in posts" :key="index">
        <img :src="post.feature_image" alt="">
        <span>{{ post.authors[0].name }}</span>
        <nuxt-link :to="{ path: post.slug }"> {{ post.title }}</nuxt-link>
        <p>
          {{ post.excerpt }}
        </p>
      </li>
    </ul>
</template>

<script>
export default {

}
</script>

<style>

</style>