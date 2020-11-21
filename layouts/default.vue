<template>
  <div>
    <template>
      <b-navbar fixed-top class="is-black">
        <template slot="brand">
          <b-navbar-item tag="router-link" :to="{ path: '/' }">
            <figure class="img">
              <img src="favicon.png" alt="" />
            </figure>
          </b-navbar-item>
        </template>
        <template slot="start">
          <b-navbar-item tag="router-link" :to="{ path: '/acerca' }">
            Acerca
          </b-navbar-item>
          <b-navbar-item tag="router-link" :to="{ path: '/blog' }">
            Blog
          </b-navbar-item>
          <b-navbar-item tag="router-link" :to="{ path: '/proyectos' }">
            Proyectos
          </b-navbar-item>
          <b-navbar-item
            tag="router-link"
            :to="{ path: '/espacio-binario-podcast' }"
          >
            Pódcast
          </b-navbar-item>
        </template>
        <template slot="end">
          <b-navbar-item tag="div">
            <div class="buttons">
              <button
                class="button is-warning is-rounded"
                @click="active = true"
              >
                <strong>Suscríbete a mi boletín</strong>
                <b-icon icon="mail" style="margin-left: 5pt"></b-icon>
              </button>
            </div>
          </b-navbar-item>
        </template>
      </b-navbar>
    </template>
    <nuxt />
    <Subscribe :active="active" @close="closeModal" />
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Raúl Rubén Castro Rivero</strong>. The website content is
          licensed
          <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/"
            >CC BY NC SA 4.0</a
          >.
        </p>
        <div class="pt">
          <a
            v-for="social in socials"
            :key="social.name"
            class="is-warning"
            :href="social.url"
          >
            <span class="mr icon is-small is-warning">
              <b-icon class="is-warning" :icon="social.name"></b-icon>
            </span>
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Subscribe from '~/components/Subscribe.vue'
export default {
  components: { Subscribe },
  data() {
    return {
      active: false,
      socials: require('~/data/social.json')
    }
  },
  methods: {
    closeModal() {
      this.active = false
    }
  }
}
</script>

<style scoped>
footer {
  padding: 3em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: black !important;
}

a {
  color: #ffdd57;
}
</style>
