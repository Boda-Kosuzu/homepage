import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Introduction from '@/components/Introduction'
import Links from '@/components/Links'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/introduction',
      name: 'Introduction',
      component: Introduction
    },
    {
      path: '/links',
      name: 'Links',
      component: Links
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
