<template>
  <div>
    <section class="section margin-top-20">
      <h1 class="title has-text-centered">Espacio Binario Pódcast</h1>
      <div class="container is-widescreen">
        <p class="has-text-centered margin-bottom-20">
          Espacio Binario es un Pódcast donde varios amigos nos reunimos a
          debatir sobre desarrollo y tecnología. Escúchalo desde tu podcasher
          favorito.
        </p>
        <div v-if="loading" style="display: flex; justify-content: center">
          <atom-spinner
            :animation-duration="1000"
            :size="60"
            :color="'#363636'"
          />
        </div>
        <div id="projects" class="columns is-12">
          <div
            v-for="episode in episodes"
            :key="episode[0].title"
            class="is-narrow column is-8 card press"
          >
            <div class="card-image">
              <figure class="image">
                <img
                  :src="episode[0].img"
                  :alt="
                    episode[0].title.substr(9, episode[0].title.length - 12)
                  "
                />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <h2 class="title is-4">
                    {{
                      episode[0].title.substr(9, episode[0].title.length - 12)
                    }}
                  </h2>
                </div>
                <p style="margin-top:.5em;">
                  {{
                    episode[0].description.substr(
                      12,
                      episode[0].description.length - 20
                    )
                  }}
                </p>
                <div class="media-content">
                  <a class="button is-black is-ligth" :href="episode[0].link">
                    <b-icon icon="podcast" style="margin-right: 5px"> </b-icon>
                    Escúchalo!
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
import { AtomSpinner } from 'epic-spinners'
export default {
  components: {
    AtomSpinner
  },
  data() {
    return {
      episodes: [],
      loading: true
    }
  },
  mounted() {
    this.loadEpisodes()
  },
  methods: {
    loadEpisodes() {
      this.loading = true
      const RSS_URL = `https://cors-anywhere.herokuapp.com/https://anchor.fm/s/1c6df2b0/podcast/rss`
      const episodes = []
      fetch(RSS_URL)
        .then((response) => response.text())
        .then((str) => new window.DOMParser().parseFromString(str, 'text/xml'))
        .then((data) => {
          console.log(data)
          const items = data.querySelectorAll('item')
          items.forEach((el) => {
            episodes.push([
              {
                link: el.querySelector('link').innerHTML,
                title: el.querySelector('title').innerHTML,
                img:
                  'https://d3t3ozftmdmh3i.cloudfront.net/production/podcast_uploaded/4669676/4669676-1586574061149-68b8b3e2af157.jpg',
                description: el.querySelector('description').innerHTML
              }
            ])
            this.loading = false
          })
          this.episodes = episodes
        })
    }
  },
  head() {
    return {
      title: '🔥 Espacio Binario Pódcast | Raúl Castro Rivero | 2020',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            'Espacio Binario Pódcast ☊ es un podcast sobre tecnología y desarrollo producido por cubanos 🇨🇺. Conoce la actualidad tecnológica de Cuba. Los integrantes de Binary Coffee ✔️ te comentamos sobre las tecnologías de la informática y la programación según nuestra experiencia.'
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
}

.media-content a {
  width: 100%;
}
</style>
