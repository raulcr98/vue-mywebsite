<template>
  <b-carousel id="carousel">
    <b-carousel-item v-for="post in posts" :key="post[0]">
      <section>
        <h1 class="title">{{ post[1] }}</h1>
      </section>
    </b-carousel-item>
  </b-carousel>
</template>

<script>
export default {
  data() {
    return {
      posts: require('~/data/posts')
    }
  }
}
</script>

<style></style>
