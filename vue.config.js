const path = require('path')
const webpack = require('webpack')
const assetsCDN = {
    // webpack build externals
    externals: {
      vue: 'Vue',
      'vue-router': 'VueRouter',
      vuex: 'Vuex',
      axios: 'axios',
    },
    css: [
    ],
    js: [
      '//cdn.jsdelivr.net/npm/vue@2.6.11/dist/vue.min.js',
      '//cdn.jsdelivr.net/npm/vue-router@3.3.4/dist/vue-router.min.js',
      '//cdn.jsdelivr.net/npm/vuex@3.4.0/dist/vuex.min.js',
      '//cdn.jsdelivr.net/npm/axios@0.19.2/dist/axios.min.js',
    ]
  }
module.exports={
    devServer:{
        progress:false
    },
    css: {
        loaderOptions: {
          less: {
            prependData:`@import "~@/assets/style/font-awesome-4.7.0/less/font-awesome.less";`
            // DO NOT REMOVE THIS LINE
          }
        }
    },
    publicPath: process.env.VUE_APP_PUBLIC_PATH,
    outputDir: 'dist',
    assetsDir: 'static',
}