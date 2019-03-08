import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import HeadPortrait from '@/components/headPortrait/index'
import Emoticon from '@/components/emoticon/detail'
import Github from '@/components/rank/index'

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
    },
    {
      path: '/emoticon/detail',
      name: 'Emoticon',
      component: Emoticon
    },
    {
      path: '/rank/index',
      name: 'github',
      component: Github
    }
  ]
})
