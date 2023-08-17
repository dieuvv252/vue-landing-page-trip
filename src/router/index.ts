import { createRouter, createWebHistory } from 'vue-router'
import LoginVue from '@/pages/Login.vue'
import HomeVue from '@/pages/Home.vue'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: LoginVue
  },
  {
    path: '/',
    name: 'Home',
    component: HomeVue
  }
]

const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes, // short for `routes: routes`
  linkExactActiveClass: ''
})

export default router
