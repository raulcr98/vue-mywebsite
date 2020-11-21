<template>
  <div>
    <section class="section margin-top-20">
      <h1 class="title has-text-centered">Mis Artículos</h1>
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
            <div class="card-image">
              <figure class="image">
                <img :src="post[2]" :alt="post[1]" />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <h2 class="title is-6">
                    {{ post[4] ? `${post[4]}:` : '' }} {{ post[1] }}
                  </h2>
                  <p aria-colcount="10" aria-rowcount="10">
                    {{ post[3].substr(0, 100) }}...
                  </p>
                </div>
                <div class="media-content">
                  <a class="button is-dark" rel="nofollow" :href="post[5]">
                    <b-icon icon="book" style="margin-right: 5px"> </b-icon>
                    Leer
                  </a>
                </div>
              </div>
            </div>
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
  },
  head() {
    return {
      title: '💻 Blog de Raúl Castro Rivero | Desarrollador Web de Cuba | 2020',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            'Aquí están algunos de mis posts. Comparto principalmente mis experiencias sobre el mundo de la programación 💻.'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://raulcr98.me/banner1.jpg'
        }
      ]
    }
  }
}
</script>

<style scoped>
.media {
  display: flex;
  flex-direction: column;
}

.media-content:last-of-type {
  margin-top: 15px;
  width: 100%;
}

.media-content a {
  width: 100%;
}

.card-image {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>
