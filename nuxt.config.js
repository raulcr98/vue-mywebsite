export default {
  serverMiddleware: ['~/servermiddleware/seo.js'],

  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: 'Raúl Castro Rivero | Desarrollador Web de Cuba | @raulcr98',
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: 'https://raulcr98.me/favicon.png'
      }
    ],
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'og:locale', content: 'es_ES' },
      {
        hid: 'description',
        name: 'description',
        content:
          'Hola, mi nombre es Raúl Castro Rivero, soy un desarrollador y emprendedor nacido en Cuba. Cuento con más de 8 años de experiencia en la web. Apasionado del Marketing y el SEO. @raulcr98'
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'https://raulcr98.me/banner1.jpg'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#FF0000' },

  /*
   ** Global CSS
   */
  css: ['~/assets/style.css'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [{ src: '~/plugins/vuelidate' }],

  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module'
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy',

    '@nuxtjs/axios',

    // Google Analytics
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-163331576-1'
      }
    ]
  ],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },
  eslint: {
    fix: true
  }
}
