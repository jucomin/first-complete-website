import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import FAQ from '../views/FAQ.vue'
import Prices from '../views/Prices.vue'
import Cupcakes from '../views/Cupcakes.vue'
import Muffins from '../views/Muffins.vue'
import Cookies from '../views/Cookies.vue'
import Search from '../views/Search.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/faq',
    name: 'faq',
    component: FAQ,
  },
  {
    path: '/prices',
    name: 'prices',
    component: Prices,
  },
  {
    path: '/cupcakes',
    name: 'cupcakes',
    component: Cupcakes,
  },
  {
    path: '/muffins',
    name: 'muffins',
    component: Muffins,
  },
  {
    path: '/cookies',
    name: 'cookies',
    component: Cookies,
  },
  {
    path: '/search',
    name: 'search',
    component: Search,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
