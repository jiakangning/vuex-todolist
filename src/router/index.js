import Vue from 'vue'
import Router from 'vue-router'

import all from '@/components/all'
import active from '@/components/active'
import completed from '@/components/completed'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',component: all},
    {path: '/active',component: active},
    {path: '/completed',component: completed}
  ]
})
