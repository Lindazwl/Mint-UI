import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../views/HelloWorld'
import loadMoreList from '../views/loadMoreList'
import uploadMore from '../views/uploadMore'
import button from '../views/button'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/loadMoreList',
      name: 'loadMoreList',
      component: loadMoreList
    },
    {
      path: '/uploadMore',
      name: 'uploadMore',
      component: uploadMore
    },
    {
      path: '/button',
      name: 'button',
      component: button
    }
  ]
})
