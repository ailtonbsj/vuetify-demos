import Vue from 'vue'
import VueRouter from 'vue-router'
import DataTable from '../views/DataTable'
import DataTableCRUD from '../views/DataTableCRUD'
import FormValidation from '../views/FormValidation'
import FlexLayout from '../views/FlexLayout'
import GridSystem from '../views/GridSystem'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: DataTable,
    icon: 'mdi-home-outline'
  },
  {
    path: '/datatable-crud',
    name: 'Data Table CRUD',
    component: DataTableCRUD,
    icon: 'mdi-information-outline'
  },
  {
    path: '/form-validation',
    name: 'Form Validation',
    component: FormValidation,
    icon: 'mdi-form-select'
  },
  {
    path: '/flex-layout',
    name: 'Flex Layout',
    component: FlexLayout,
    icon: 'mdi-page-layout-header-footer'
  },
  {
    path: '/grid-system',
    name: 'Grid System',
    component: GridSystem,
    icon: 'mdi-grid'
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
