<template>
  <div>
    <section class="section margin-top-20">
      <h1 class="title has-text-centered">Eventos</h1>
      <div class="container is-widescreen">
        <p class="has-text-centered margin-bottom-20">
          Eventos y cursos en los que he participado
        </p>
        <div id="projects" class="columns is-12">
          <div
            v-for="event in events"
            :key="event.name"
            class="is-narrow column is-8 card press"
          >
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <h2 class="title is-4">{{ event.name }}</h2>
                  <div
                    v-for="participation in event.participations"
                    :key="participation"
                  >
                    <p>
                      [{{ participation.year }}] - {{ participation.coach }}
                      {{ participation.description }}
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
      events: require('~/data/events.json')
    }
  }
}
</script>
