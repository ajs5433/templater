import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import create from '@/components/create'
import active from '@/components/active'
import search from '@/components/search'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: home
    },
    {
      path: '/create',
      name: 'Create',
      component: create
    },
    {
      path: '/active',
      name: 'Active',
      component: active
    },
    {
      path: '/search',
      name: 'Search',
      component: search
    }
  ]
})
