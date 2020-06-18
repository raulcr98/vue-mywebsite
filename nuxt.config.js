export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: 'Raúl C. Rivero | Desarrollador Web de Cuba',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'og:locale', content: 'es_ES' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      { hid: 'og:type', name: 'og:type', content: 'website' },
      { hid: 'og:site_name', name: 'og:site_name', content: 'Raúl C. Rivero' },
      { hid: 'og:title', name: 'og:title', content: 'Raúl C. Rivero' },
      {
        hid: 'og:description',
        name: 'og:description',
        content: process.env.npm_package_description
      },
      { hid: 'twitter:site', name: 'twitter:site', content: '@raulcr98' },
      {
        hid: 'twitter:title',
        name: 'twitter:title',
        content: 'Raúl C. Rivero'
      },
      {
        hid: 'twitter:description',
        name: 'twitter:description',
        content: process.env.npm_package_description
      },
      {
        hid: 'twitter:creator',
        name: 'twitter:creator',
        content: '@raulcr98'
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
    ],

    // Favicon
    [
      'nuxt-rfg-icon',
      {
        static: true,
        staticPath: 'static',
        masterPicture: 'static/favicon.png',
        rfg: {
          masterPicture: 'static/favicon.png',
          iconsPath: '/',
          design: {
            ios: {
              pictureAspect: 'noChange',
              assets: {
                ios6AndPriorIcons: false,
                ios7AndLaterIcons: false,
                precomposedIcons: false,
                declareOnlyDefaultIcon: true
              }
            },
            desktopBrowser: {},
            windows: {
              pictureAspect: 'noChange',
              backgroundColor: '#FFDA17',
              onConflict: 'override',
              assets: {
                windows80Ie10Tile: false,
                windows10Ie11EdgeTiles: {
                  small: false,
                  medium: true,
                  big: false,
                  rectangle: false
                }
              }
            },
            androidChrome: {
              pictureAspect: 'shadow',
              themeColor: '#FFDA17',
              manifest: {
                name: 'Raúl C. Rivero',
                startUrl: 'https://raulcr98.me',
                display: 'standalone',
                orientation: 'notSet',
                onConflict: 'override',
                declared: true
              },
              assets: {
                legacyIcon: true,
                lowResolutionIcons: false
              }
            },
            safariPinnedTab: {
              pictureAspect: 'blackAndWhite',
              threshold: 66.40625,
              themeColor: '#FFDA17'
            }
          },
          settings: {
            compression: 3,
            scalingAlgorithm: 'Mitchell',
            errorOnImageTooSmall: false,
            readmeFile: true,
            htmlCodeFile: true,
            usePathAsIs: false
          }
        }
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
  }
}
