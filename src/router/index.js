import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import HeadPortrait from '@/components/headPortrait/index'
import EmoticonMain from '@/components/emoticon/index'
import Emoticon from '@/components/emoticon/detail'
import wallPaper from '@/components/wallpaper/index'
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
      path: '/headPortrait/index',
      name: 'HeadPortrait',
      component: HeadPortrait
    },
    {
      path: '/emoticon/index',
      name: 'EmoticonMain',
      component: EmoticonMain
    },
    {
      path: '/emoticon/detail',
      name: 'Emoticon',
      component: Emoticon
    },
    {
      path: '/wallpaper/index',
      name: 'wallPaper',
      component: wallPaper
    },
    {
      path: '/rank/index',
      name: 'github',
      component: Github
    }
  ]
})
