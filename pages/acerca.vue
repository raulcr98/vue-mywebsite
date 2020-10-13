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
          que llegó a mis manos un libro de desarrollo web. A día de hoy conozco
          varios lenguajes de programación, me he involucrado en competencias,
          grandes proyectos de software y mi vida se ha convertido en estudio y
          continuo aprendizaje.
        </p>
      </div>
    </section>
    <section class="section">
      <h2 class="title has-text-centered">Competencias</h2>
      <div class="container is-widescreen">
        <p class="has-text-centered">
          Desde mi etapa preuniversitaria comencé a participar de forma
          entusiasta en competiciones de programación, copas y torneos
          nacionales. Obtuve tres años consecutivos(2014-2016) medalla de plata
          en el Concurso Nacional de Computación. Desde esta etapa me involucré
          con el torneo para universitarios de ACM-ICPC, donde competía como
          invitado. Una vez entré a la universidad participé de forma oficial,
          llegando a la Final Caribeña y obteniendo los lugares 13(2018) y
          8(2019). Contribuí a que mi universidad se llevara la medalla de
          bronce en la Liga Cubana de Programación en 2019. También he
          participado en rondas de La Red de Programación Competitiva y
          Codeforces.
        </p>
      </div>
    </section>
    <section class="section">
      <h2 class="title has-text-centered">Eventos</h2>
      <div class="container is-widescreen">
        <p class="has-text-centered">
          Me gusta participar en todo tipo de eventos en los que pueda aprender
          algo. En la Universidad de Ciencias Informáticas y por el Movimiento
          de Programación Competitiva tuve la suerte de formar parte de varios
          Campamentos Caribeños donde conocí gente entusiasta y muy preparada,
          eventos conducidos por profesores con basta experiencia como es el
          caso de Pablo Zimmerman(ARG), Leopoldo Taravilse(ARG), Artzem
          Zuck(RUS).
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: '📙 Acerca | Raúl Castro Rivero | Desarrollador Web de Cuba',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          hid: 'description',
          name: 'description',
          content:
            'Conoce mi trayectoria 🗺️ de desarrollador de software y emprendedor cubano :)'
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://raulcr98.me/banner1.jpg'
        }
      ]
    }
  }
}
</script>
