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
        </template>
        <template slot="end">
          <b-navbar-item tag="div">
            <div class="buttons">
              <Suscribe
                :active="active"
                @close="
                  ($payload) => {
                    closeModal()
                  }
                "
              />
            </div>
          </b-navbar-item>
        </template>
      </b-navbar>
    </template>
    <nuxt />
  </div>
</template>

<script>
import Suscribe from '~/components/Suscribe.vue'
export default {
  components: { Suscribe }
}
</script>
