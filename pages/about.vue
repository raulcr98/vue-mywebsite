<template>
  <div>
    <section class="section margin-top-20">
      <h1 class="title has-text-centered">
        Acerca de mí: <u>Raúl C. Rivero</u>
      </h1>
      <div class="container is-widescreen">
        <p class="has-text-centered">
          Desde pequeño estuve fuertemente interesado por conocer todo sobre las
          computadoras. La programación en aquel entonces no era más que un
          conjunto de palabras que carecían de significado para mí, todo hasta
          que llegó a mis manos un libro de programación web. A día de hoy
          conozco varios lenguajes de computación, me he involucrado en
          competencias, grandes proyectos de software y mi vida se ha convertido
          en estudio y continuo aprendizaje.
        </p>
      </div>
    </section>
    <section class="section">
      <h2 class="title has-text-centered">Competencias</h2>
      <div class="container is-widescreen">
        <p class="has-text-centered">
          Comencé a participar desde el pre-universitario en competiciones
          relacionadas con la programación y la informática, a diferentes
          niveles y en las que he obtenido resultados satisfactorios. Puedes ver
          más detalles en <a href="/competitions/">Competencias</a>.
        </p>
      </div>
    </section>
    <section class="section">
      <h2 class="title has-text-centered">Eventos</h2>
      <div class="container is-widescreen">
        <p class="has-text-centered">
          Me gusta participar en todo tipo de eventos en los que pueda aprender
          algo. En la Universidad de Ciencias informáticas y por el movimiento
          de programación competitiva tuve la suerte de formar parte de varios
          campamentos caribeños donde conocí gente entusiasta y muy preparada.
          Puedes ver más detalles en
          <a href="/events/">Eventos</a>.
        </p>
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
