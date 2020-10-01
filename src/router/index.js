import Vue from 'vue'
import VueRouter from 'vue-router'
import Template from '../views/Template_Page.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/template',
    name: 'Template',
    component: Template
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/',
    name: 'LandingPage',
    component: () => import('../views/LandingPage.vue')
  },
  {
    path: '/dashboard',
    name: 'History',
    component: () => import('../views/History.vue')
  },
  {
    path: '/transfer',
    name: 'Transfer',
    component: () => import('../views/Transfer.vue')
  },
  {
    path: '/continue',
    name: 'ContTransfer',
    component: () => import('../views/Transfer.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
