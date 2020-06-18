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
              <nuxt-link class="button is-primary is-rounded" to="/addme">
                <strong>Suscríbete a mi boletín</strong>
                <b-icon icon="mail" style="margin-left: 5pt"></b-icon>
              </nuxt-link>
            </div>
          </b-navbar-item>
        </template>
      </b-navbar>
    </template>
    <nuxt />
  </div>
</template>

<script>
export default {}
</script>

<style scoped></style>
