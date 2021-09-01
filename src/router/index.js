import { createRouter, createWebHistory } from 'vue-router'
import Demo from '../views/demo'

const routes = [
  {
    path: '/demo',
    name: 'demo',
    component: Demo
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
