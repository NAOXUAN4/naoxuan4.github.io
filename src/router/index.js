import { createRouter, createWebHistory } from 'vue-router'
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
history: createWebHistory(),
  routes
})

export default router