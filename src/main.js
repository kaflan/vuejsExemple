// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueMaterial from 'vue-material'
import VueRouter from 'vue-router'
import 'vue-material/dist/vue-material.css'
import service from './services'
import router from './route'
// import store from './store'
/*
 Use all custom service
*/
Vue.use(VueRouter)
Vue.use(service)
Vue.use(VueMaterial)
new Vue({
  router: router,
  // store,
  el: '#app',
  template: '<App/>',
  components: { App }
}).$mount('#app')
