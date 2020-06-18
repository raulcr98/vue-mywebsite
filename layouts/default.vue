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
    <div :class="active ? 'modal is-active' : 'modal'">
      <div class="modal-background"></div>
      <div class="modal-content columns">
        <div class="column"></div>
        <section
          class="hero is-white column is-three-fifths"
          style="border-radius: 10pt"
        >
          <div class="hero-body">
            <div class="container">
              <h1 class="title">
                Suscríbete a mi boletín
              </h1>
              <form action="">
                <div class="field">
                  <label class="label">Correo</label>
                  <div class="control has-icons-left has-icons-right">
                    <input class="input" type="email" placeholder="Correo" />
                    <span class="icon is-small is-left">
                      <b-icon icon="email"></b-icon>
                    </span>
                    <span class="icon is-small is-right">
                      <i class="fas fa-exclamation-triangle"></i>
                    </span>
                  </div>
                </div>
                <div class="field is-grouped">
                  <div class="control">
                    <button class="button is-success">Suscríbete</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
        <div class="column"></div>
      </div>
      <button
        class="modal-close is-large"
        aria-label="close"
        @click="active = false"
      ></button>
    </div>
    <nuxt />
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false
    }
  }
}
</script>

<style scoped></style>
