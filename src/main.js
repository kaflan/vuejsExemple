// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueMaterial from 'vue-material'
import VueRouter from 'vue-router'
import 'vue-material/dist/vue-material.css'
import service from './services'
/*
 Use all custom service
*/
Vue.use(service)
Vue.use(VueMaterial)
Vue.use(VueRouter)
const success = {
  template: `
    <div class="success">
      <h2>success </h2>
    </div>
  `
}
const router = new VueRouter({
  routes: [
    { path: '/success', component: success }
  ]})
/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App, success }
}).$mount('#app')
