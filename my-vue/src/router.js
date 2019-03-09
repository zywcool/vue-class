import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import User from './views/User.vue'
import Category from './views/Category.vue'
import Search from './views/Search.vue'
import Shopping from './views/Shopping.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/category',
      name: 'category',
      component: Category
    },
    {
      path: '/search',
      name: 'search',
      component: Search
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: Shopping
    }
  ]
})
