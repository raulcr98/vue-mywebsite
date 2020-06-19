<template>
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
              Suscríbete a mi boletín semanal
            </h1>
            <form method="post" name="suscription" @submit.prevent="submitForm">
              <div class="field">
                <label class="label">Nombre</label>
                <div class="control has-icons-left has-icons-right">
                  <input
                    class="input"
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    v-model="form.name"
                    required
                  />
                  <span class="icon is-small is-left">
                    <b-icon icon="account"></b-icon>
                  </span>
                  <span class="icon is-small is-right">
                    <i class="fas fa-exclamation-triangle"></i>
                  </span>
                </div>
              </div>
              <div class="field">
                <label class="label">Correo</label>
                <div class="control has-icons-left has-icons-right">
                  <input
                    class="input"
                    type="email"
                    name="email"
                    placeholder="Correo"
                    v-model="form.email"
                    required
                  />
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
      @click="closeModal()"
    ></button>
  </div>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: () => false
    }
  },
  data() {
    return {
      form: {
        name: '',
        email: ''
      }
    }
  },
  methods: {
    encode(data) {
      return Object.keys(data)
        .map(
          (key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        )
        .join('&')
    },
    submitForm() {
      const axiosConfig = {
        header: { 'Content-Type': 'application/x-www-form-urlencoded' }
      }
      this.$axios
        .$post(
          'https://formspree.io/xnqgzdbj',
          this.encode({
            ...this.form
          }),
          axiosConfig
        )
        .then(() => {
          this.closeModal()
        })
    },
    closeModal() {
      this.active = false
      this.$emit('close', {})
    }
  }
}
</script>

<style></style>
