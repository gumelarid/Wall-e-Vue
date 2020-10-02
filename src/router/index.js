import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Template from '../views/Template_Page.vue'
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'
import Pin from '../views/auth/Pin.vue'
import Forgot from '../views/auth/Forgot.vue'
import SetPassword from '../views/auth/SetPassword.vue'
import Activated from '../views/auth/Activated.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresVisitor: true }
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    meta: { requiresVisitor: true }
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: { requiresVisitor: true }
  },
  {
    path: '/pin',
    name: 'Pin',
    component: Pin,
    meta: { requiresAuth: true }
  },
  {
    path: '/forgot',
    name: 'Forgot',
    component: Forgot,
    meta: { requiresVisitor: true }
  },
  {
    path: '/setpassword',
    name: 'SetPassword',
    component: SetPassword,
    meta: { requiresVisitor: true }
  },
  {
    path: '/activate',
    name: 'Activated',
    component: Activated,
    meta: { requiresVisitor: true }
  },
  {
    path: '/template',
    name: 'Template',
    component: Template,
    meta: { requiresAuth: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters.isLogin) {
      next({
        path: '/login'
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.isLogin) {
      next({
        path: '/template'
      })
    } else {
      next()
    }
  } else {
    next() // make sure to always call next()!
  }
})

export default router
