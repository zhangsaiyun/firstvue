import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/HelloWorld'
import HelloPerson from '@/views/HelloPerson'
import learnComponents from '@/views/learnComponents/index'
import reusability from '@/views/reusability/index'

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
      path: '/learnComponents',
      name: 'learnComponents',
      component: learnComponents
    },

    {
      path: '/reusability',
      name: 'reusability',
      component: reusability
    }
  ]
})
