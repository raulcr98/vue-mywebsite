<template>
  <div>
    <template>
      <b-navbar fixed-top shadow>
        <template slot="brand">
          <b-navbar-item tag="router-link" :to="{ path: '/' }">
            raulcr98
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
      </b-navbar>
    </template>
    <nuxt />
  </div>
</template>

<script>
export default {}
</script>

<style scoped></style>
