// only add `router.base = '/<repository-name>/'` if `DEPLOY_ENV` is `GH_PAGES`
// const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
//   router: {
//     base: '/proctor/'
//   }
// } : {}


module.exports = {
  mode: 'spa',
  // router:{
  //   base:
  // },
  // modules: [
  //   '@nuxtjs/axios',
  //   ['@nuxtjs/markdownit', {html: true, linkify: true, typographer: true }]
  // ],
  // markdownit: {
  //   injected: true
  // },
  /*
  ** Headers of the page
  */
  head: {
    title: 'Hannah Proctor',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Hannah Proctor -- Personal Website' }
    ],
    link: [
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.0/css/bulma.min.css' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans|Source+Code+Pro":400,700' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Abel|Anton|IBM+Plex+Mono:400,400i|Oswald|Work+Sans:800' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#f12dff' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
