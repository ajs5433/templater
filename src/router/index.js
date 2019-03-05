import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import home from '@/components/home'
import create from '@/components/create'
import active from '@/components/active'
import search from '@/components/search'
=======
import HelloWorld from '@/components/HelloWorld'
>>>>>>> e71e7268659ad9cc665b6d94894f2d8eacc0a8df

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
<<<<<<< HEAD
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
=======
      name: 'HelloWorld',
      component: HelloWorld
>>>>>>> e71e7268659ad9cc665b6d94894f2d8eacc0a8df
    }
  ]
})
