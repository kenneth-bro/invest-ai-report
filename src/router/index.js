import Vue          from 'vue'
import Router       from 'vue-router'
import HelloWorld   from '@/components/HelloWorld'
import HomeReport from '@/components/HomeReport'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/home',
      name: 'HomeReport',
      component: HomeReport
    }
  ]
})
