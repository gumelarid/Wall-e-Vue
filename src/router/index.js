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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
