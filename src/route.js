import VueRouter from 'vue-router'
const success = {
  template: `
    <div class="success">
      <h2>success </h2>
    </div>
  `
}
const router = new VueRouter({ routes: [
    { path: '/success', component: success }
]
})
export default router
