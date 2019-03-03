import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import HeadPortrait from '@/components/headPortrait/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/headPortrait',
      name: 'HeadPortrait',
      component: HeadPortrait
    }
  ]
})
