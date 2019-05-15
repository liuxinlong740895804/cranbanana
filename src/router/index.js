import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/containers/Home/Home'
import Files from '@/components/containers/Files/Files'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/files',
      name: 'Files',
      component: Files
    }
  ]
})
