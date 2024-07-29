import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/navPage.vue'
import Lab from '../views/lab.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Lab',
    name: 'Lab',
    component: Lab
  }
]

const router = createRouter({
history: createWebHashHistory(),
  routes
})

export default router