<template>
  <div>
    <section class="section margin-top-20">
      <h2 class="subtitle has-text-centered">Mis Artículos</h2>
      <div class="container is-widescreen">
        <p class="has-text-centered margin-bottom-20">
          Algunos de mis artículos para diferentes plataformas online
        </p>
        <div id="press" class="columns is-12">
          <div
            v-for="post in posts"
            :key="post[0]"
            class="is-narrow column is-4 card press"
          >
            <a :href="post[5]">
              <div class="card-image">
                <figure class="image">
                  <img :src="post[2]" :alt="post[1]" />
                </figure>
              </div>
              <div class="card-content">
                <div class="media">
                  <div class="media-content">
                    <p class="title is-4">{{ post[1] }}</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: require('~/data/posts.json')
    }
  }
}
</script>

<style></style>
