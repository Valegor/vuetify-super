import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Auth/Login'
import Registration from '@/components/Auth/Registration'
import Test from '@/components/Test'
import Get from '@/components/Get'
// import { faTableTennis } from '@fortawesome/free-solid-svg-icons'
// import Horoscop from '@/components/Astrofitness/Horoscop'
// import Settings from '@/components/Astrofitness/Settings'
// import Biorhythm from '@/components/Astrofitness/Biorhythm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/registration',
      name: 'reg',
      component: Registration
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
      path: '/get',
      name: 'het',
      component: Get
    },
    // {
    //   path: '/bio',
    //   name: 'bio',
    //   component: Biorhythm
    // },
    // {
    //   path: '/horo',
    //   name: 'horo',
    //   component: Horoscop
    // },
    // {
    //   path: '/settings',
    //   name: 'settings',
    //   component: Settings
    // }
  ],
  mode: 'history'
})

// const routes = []

// const router = new VueRouter({
//   routes
// })

// export default router
