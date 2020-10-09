import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _144f0cf4 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _6f603715 = () => interopDefault(import('../pages/category.vue' /* webpackChunkName: "pages/category" */))
const _ee76a4b0 = () => interopDefault(import('../pages/product.vue' /* webpackChunkName: "pages/product" */))
const _1590544b = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _144f0cf4,
    name: "about"
  }, {
    path: "/category",
    component: _6f603715,
    name: "category"
  }, {
    path: "/product",
    component: _ee76a4b0,
    name: "product"
  }, {
    path: "/",
    component: _1590544b,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
