import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/HelloWorld'
import HelloPerson from '@/views/HelloPerson'
import reusability from '@/views/reusability'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/helloPerson',
      name: 'HelloPerson',
      component: HelloPerson
    },
    {
      path: '/reusability',
      name: 'reusability',
      component: reusability
    }
  ]
})
