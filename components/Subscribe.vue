<template>
  <div>
    <div :class="active ? 'modal is-active' : 'modal'">
      <div class="modal-background" @click="closeModal()"></div>
      <div class="modal-content columns">
        <div class="column" @click="closeModal()"></div>
        <section
          class="hero is-white column is-three-fifths"
          style="border-radius: 10pt"
        >
          <div class="hero-body">
            <div class="container">
              <h1 class="title">
                Suscríbete a mi boletín semanal
              </h1>
              <form
                method="post"
                name="suscription"
                @submit.prevent="submitForm"
              >
                <div class="field">
                  <label class="label">Nombre</label>
                  <div class="control has-icons-left has-icons-right">
                    <input
                      v-model="form.name"
                      class="input"
                      type="text"
                      name="name"
                      placeholder="Nombre"
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
                      v-model="form.email"
                      class="input"
                      type="email"
                      name="email"
                      placeholder="Correo"
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
        <div class="column" @click="closeModal()"></div>
      </div>
      <button
        class="modal-close is-large"
        aria-label="close"
        @click="closeModal()"
      ></button>
    </div>
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
          this.$buefy.toast.open({
            message: 'Te has suscrito satisfactoriamente a mi lista de correo!',
            type: 'is-success',
            position: 'is-bottom',
            duration: 5000
          })
          this.closeModal()
        })
        .catch(() => {
          this.$buefy.toast.open({
            message: 'Ha ocurrido algo por favor pruebe nuevamente!',
            type: 'is-danger',
            position: 'is-bottom',
            duration: 5000
          })
        })
    },
    closeModal() {
      this.$emit('close', {})
    }
  }
}
</script>
