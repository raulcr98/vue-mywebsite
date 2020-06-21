<template>
  <div>
    <section class="section margin-top-20">
      <h1 class="title has-text-centered">Competencias</h1>
      <div class="container is-widescreen">
        <p class="has-text-centered margin-bottom-20">
          Algunas competencias en las que he participado
        </p>
        <div id="projects" class="columns is-12">
          <div
            v-for="competition in competitions"
            :key="competition.id"
            class="is-narrow column is-8 card press"
          >
            <div v-if="competition.img" class="card-image">
              <figure class="image">
                <img :src="competition.img" :alt="competition.name" />
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <h2 class="title is-4">
                    {{ competition.name }} - ({{
                      competition.participations.length
                    }}
                    participaciones)
                  </h2>
                  <div
                    v-for="participation in competition.participations.reverse()"
                    :key="participation.score"
                  >
                    <p>
                      [{{ participation.year }}] -
                      {{ participation.score }}
                    </p>
                  </div>
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
      competitions: require('~/data/competitions.json')
    }
  }
}
</script>

<style></style>
