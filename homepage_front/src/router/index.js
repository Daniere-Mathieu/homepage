import { createRouter, createWebHistory } from 'vue-router'
//import Home from '../views/Home.vue'
import Hommie from '../views/homepage.vue'
import Api from '../views/Api.vue'
import Cocktail from '../views/Cocktail.vue'
import Jikan from '../views/Jikan.vue'
import pokemon from '../views/Pokemon.vue'
import CoinGecko from '../views/CoinGecko.vue'


const routes = [
  {
    path: '/',
    name: 'Hommie',
    component: Hommie
  },
  {
    path: '/api',
    name: 'api',
    component: Api
  },
  {
    path: '/Coingecko',
    name: 'CoinGecko',
    component: CoinGecko
  },
  {
    path: '/cocktail',
    name: 'cocktail',
    component: Cocktail
  },
  {
    path: '/pokemon',
    name: 'pokemon',
    component: pokemon
  },
  {
    path: '/jikan',
    name: 'Jikan',
    component: Jikan
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
