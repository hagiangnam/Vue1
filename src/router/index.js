import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HomePage from '@/components/HomePage'
import AppLayout from '@/components/layouts/AppLayout'
import Vue from "vue";
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: AppLayout,
      children: [
        {
          path: '',
          name: 'HomePage',
          component: HomePage
        },
        {
          path: 'welcome',
          name: 'HelloWorld',
          component: HelloWorld
        }
      ]
    },

  ]
})
