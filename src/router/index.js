import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/containers/Home/Home'
import Files from '@/components/containers/Files/Files'
import Second from '@/components/containers/Second/Second'
import SecondOne from '@/components/containers/Second/SecondOne'
import SecondTwo from '@/components/containers/Second/SecondTwo'
import NotFound from '@/components/containers/NotFound/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'',
      redirect: '/home',
      component: Home
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/files',
      name: 'Files',
      component: Files
    },
    {
      path: '/second',
      name: 'Second',
      component: Second,
      children:[
        {
          path: 'secondOne',
          name: 'SecondOne',
          component: SecondOne
        },
        {
          path: 'secondTwo',
          name: 'SecondTwo',
          component: SecondTwo
        }
      ]
    },
    {
      path:'**',
      component: NotFound
    }

  ]
})
