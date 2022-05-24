import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import one from '@/components/one'
import two from '@/components/two'
import three from '@/components/three'
import four from '@/components/four'
import five from '@/components/five'
import six from '@/components/six'
import seven from '@/components/seven'
import eight from '@/components/eight'
import nine from '@/components/nine'
import ten from '@/components/ten'
import zhi from '@/components/zhi'
import login from '@/components/login'
import register from '@/components/register'
import she from '@/components/she'
import kong from '@/components/kong'

Vue.use(Router)

export default new Router({
	mode:'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      component: ()=>import('@/components/login.vue'),
    },
    {
      path: '/register',
      name: 'register',
      component: ()=>import('@/components/register.vue'),
    },
    {
      path: '/',
      name: 'one',
      component: one,
    },
    {
      path: '/two',
      name: 'two',
      component: two,
    },
    
    {
      path: '/three',
      name: 'three',
      component: three
    },
    {
      path: '/four',
      name: 'four',
      component: four
    },
    {
      path: '/five',
      name: 'five',
      component: five
    },
    {
      path: '/six',
      name: 'six',
      component: six,
    },
    {
      path: '/seven',
      name: 'seven',
      component: seven,
    },
    {
      path: '/eight',
      name: 'eight',
      component: eight,
    },
    {
      path: '/nine',
      name: 'nine',
      component: nine,
    },
    {
      path: '/ten',
      name: 'ten',
      component: ten,
    },
    {
      path: '/she',
      name: 'she',
      component: she,
    },
    {
      path: '/zhi',
      name: 'zhi',
      component: zhi,
    },
    {
      path: '/kong',
      name: 'kong',
      component: kong,
    }
  ]
})
