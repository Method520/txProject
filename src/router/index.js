import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/index'
// import personTarget from '@/views/personTarget'
// import teamTarget from '@/views/teamTarget'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: '首页',
    //   component: index,
    //   redirect: '/home'
    // }
    {
      path: '/',
      redirect: '/home'
    }, {
      path: '/home',
      name: 'index',
      component: index
    }
    // {
    //   path: '/personTarget',
    //   name: 'personTarget',
    //   component: personTarget
    // }, {
    //   path: '/teamTarget',
    //   name: 'teamTarget',
    //   component: teamTarget
    // }
  ]
})
