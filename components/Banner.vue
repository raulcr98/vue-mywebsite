<template>
  <div id="my-banner" class="hero is-white">
    <div class="hero-body">
      <div id="center" class="container">
        <h1 class="title is-1">Raúl C. Rivero</h1>
        <img class="photo" src="banner1.jpg" alt="" />
        <p class="pt">
          Hola mi nombre es Raúl y soy desarrollador web. Puedes leer más
          <a href="/about/">sobre mí</a>.
        </p>
        <div class="pt">
          <a v-for="social in socials" :key="social.name" :href="social.url">
            <span class="mr icon is-small">
              <b-icon :icon="social.name"></b-icon>
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      socials: require('~/data/social.json')
    }
  }
}
</script>
