// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import Element from 'element-ui'
// import '@/assets/style/font-awesome-4.7.0/less/font-awesome.less'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import '@/mock'
Vue.config.productionTip = false
Vue.use(Mint)
/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   components: { App },
//   template: '<App/>'
// })
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
