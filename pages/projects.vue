<template>
  <div>
    <layout-header size="is-small" />
    <section class="section margin-top-20">
      <h2 class="subtitle has-text-centered">Mis Proyectos</h2>
      <div class="container is-widescreen">
        <p class="has-text-centered margin-bottom-20">
          Algunos de los proyectos en los que he estado trabajando
        </p>
        <div id="projects" class="columns is-12">
          <div
            v-for="project in posts"
            :key="project.name"
            class="is-narrow column is-8 card press"
          >
            <a :href="project.url">
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
      posts: require('~/data/projects.json')
    }
  }
}
</script>

<style></style>
