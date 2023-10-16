import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EinsatzView from '../views/EinsatzView.vue'
import HydrantenView from '../views/HydrantenView.vue'
import HilfeImWald from '../views/HilfeImWald.vue'
import GefahrgutView from '../views/GefahrgutView.vue'
import LernView from '../views/LernView.vue'
import MTA2 from '../views/MTA2.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/einsatz',
    name: 'einsatz',
    component: EinsatzView
  },
  {
    path: '/hydranten',
    name: 'hydranten',
    component: HydrantenView
  },
  {
    path: '/hilfeimwald',
    name: 'hilfeimwald',
    component: HilfeImWald
  },
  {
    path: '/gefahrgut',
    name: 'gefahrgut',
    component: GefahrgutView
  },
  {
    path: '/lern-hub',
    name: 'lern-hub',
    component: LernView
  },
  {
    path: '/mta2',
    name: 'mta2',
    component: MTA2
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
