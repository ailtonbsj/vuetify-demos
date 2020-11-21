import Vue from 'vue'
import VueRouter from 'vue-router'
import DataTable from '../views/DataTable'
import DataTableCRUD from '../views/DataTableCRUD'
import FormValidation from '../views/FormValidation'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: DataTable
  },
  {
    path: '/datatable-crud',
    name: 'DataTableCRUD',
    component: DataTableCRUD
  },
  {
    path: '/form-validation',
    name: 'FormValidation',
    component: FormValidation
  }
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
