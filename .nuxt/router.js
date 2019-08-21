import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _a968f796 = () => interopDefault(import('..\\pages\\products.vue' /* webpackChunkName: "pages_products" */))
const _8d2ecaa6 = () => interopDefault(import('..\\pages\\products\\index.vue' /* webpackChunkName: "pages_products_index" */))
const _4eb49e3c = () => interopDefault(import('..\\pages\\products\\_productId\\index.vue' /* webpackChunkName: "pages_products__productId_index" */))
const _8ae863ac = () => interopDefault(import('..\\pages\\products\\_productId\\edit.vue' /* webpackChunkName: "pages_products__productId_edit" */))
const _42d8ba5e = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
      path: "/products",
      component: _a968f796,
      children: [{
        path: "",
        component: _8d2ecaa6,
        name: "products"
      }, {
        path: ":productId",
        component: _4eb49e3c,
        name: "products-productId"
      }, {
        path: ":productId/edit",
        component: _8ae863ac,
        name: "products-productId-edit"
      }]
    }, {
      path: "/",
      component: _42d8ba5e,
      name: "index"
    }],

  fallback: false
}

export function createRouter() {
  return new Router(routerOptions)
}
