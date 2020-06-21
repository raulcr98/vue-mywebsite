<template>
  <div>
    <template>
      <b-navbar fixed-top shadow>
        <template slot="brand">
          <b-navbar-item tag="router-link" :to="{ path: '/' }">
            <figure class="img">
              <img src="favicon.png" alt="" />
            </figure>
          </b-navbar-item>
        </template>
        <template slot="start">
          <b-navbar-item tag="router-link" :to="{ path: '/about/' }">
            Acerca
          </b-navbar-item>
          <b-navbar-item tag="router-link" :to="{ path: '/blog/' }">
            Blog
          </b-navbar-item>
          <b-navbar-item tag="router-link" :to="{ path: '/projects/' }">
            Proyectos
          </b-navbar-item>
          <b-navbar-item tag="router-link" :to="{ path: '/competitions/' }">
            Competencias
          </b-navbar-item>
          <b-navbar-item tag="router-link" :to="{ path: '/events/' }">
            Eventos y cursos
          </b-navbar-item>
        </template>
        <template slot="end">
          <b-navbar-item tag="div">
            <div class="buttons">
              <button
                class="button is-primary is-rounded"
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
    <Suscribe
      :active="active"
      @close="
        ($payload) => {
          closeModal()
        }
      "
    />
    <nuxt />
  </div>
</template>

<script>
import Suscribe from '~/components/Suscribe.vue'
export default {
  components: { Suscribe },
  data() {
    return {
      active: false
    }
  },
  methods: {
    closeModal() {
      this.active = false
    }
  }
}
</script>

<style scoped></style>
