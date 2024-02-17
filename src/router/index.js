import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/LoginView.vue'
import HomeView from '../views/HomeView.vue'
import EinsatzView from '../views/EinsatzView.vue'
import HydrantenView from '../views/HydrantenView.vue'
import HilfeImWald from '../views/HilfeImWald.vue'
import GefahrgutView from '../views/GefahrgutView.vue'
import LernView from '../views/LernView.vue'
import MTA2 from '../views/MTA2.vue'
import LeistungspruefungTHL from '../views/LeistungspruefungTHL.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '//:id',
    name: 'home2',
    component: HomeView
  },
  {
    path: '/home/:id',
    name: 'home',
    component: HomeView
  },
  {
    path: '/einsatz/:id',
    name: 'einsatz',
    component: EinsatzView
  },
  {
    path: '/hydranten/:id',
    name: 'hydranten',
    component: HydrantenView
  },
  {
    path: '/hilfeimwald/:id',
    name: 'hilfeimwald',
    component: HilfeImWald
  },
  {
    path: '/gefahrgut/:id',
    name: 'gefahrgut',
    component: GefahrgutView
  },
  {
    path: '/lern-hub/:id',
    name: 'lern-hub',
    component: LernView
  },
  {
    path: '/mta2/:id',
    name: 'mta2',
    component: MTA2
  },
  {
    path: '/leistungspruefung-thl/:id',
    name: 'leistungspruefung-thl',
    component: LeistungspruefungTHL
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
