<template>
  <div>
    <section class="section margin-top-20">
      <h1 class="title has-text-centered">Mis Proyectos</h1>
      <div class="container is-widescreen">
        <p class="has-text-centered margin-bottom-20">
          Algunos de los proyectos en los que he estado trabajando.
        </p>
        <div id="projects" class="columns is-12">
          <div
            v-for="project in projects"
            :key="project.name"
            class="is-narrow column is-8 card press"
          >
            <div class="card-image">
              <figure class="image">
                <img :src="project.img" :alt="project.name" />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <h2 class="title is-4">{{ project.name }}</h2>
                  <p>{{ project.description }}</p>
                </div>
                <div class="media-content" style="margin-top: 10px">
                  <span
                    v-for="tag in project.tags"
                    :key="tag"
                    class="tag"
                    style="margin-right: 5px"
                  >
                    {{ tag }}
                  </span>
                </div>
                <div class="media-content">
                  <a class="button is-black" :href="project.url">
                    <b-icon icon="eye" style="margin-right: 5px"> </b-icon>
                    Ver
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
      projects: require('~/data/projects.json')
    }
  },
  head() {
    return {
      title:
        '💻 Proyectos de Raúl Castro Rivero | Desarrollador Web de Cuba | 2020',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            'Conoce algunos de los proyectos 🖥️ en los que he estado trabajando hace algún tiempo.'
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
