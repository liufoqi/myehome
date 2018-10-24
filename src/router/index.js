import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const components={
  Tz:()=>import('@/views/informKnows/index'),
  Login:()=>import('@/views/login/index'),
  Layout:()=>import ('@/views/index/index'),
  Xgnews:()=>import('@/views/index/newYeys/index'),
  Djone:()=>import('@/views/index/partybuilding/index'),
  Dylsf:()=>import('@/views/index/partynumber/index'),
  Zslife:()=>import('@/views/index/organizationLife/index'),
  Thinkreport:()=>import('@/views/index/organizationLife/thinkReport/index'),
  Baidumap:()=>import('@/views/index/organizationLife/baidumap/index'),
  History:()=>import('@/views/index/history/index'),
  Anytime:()=>import('@/views/index/anytimeAnyplace/index'),
  ShootAnywhere:()=>import('@/views/index/shootanywhere/index'),
  Dyhd:()=>import('@/views/index/exchangenumber/index'),
  Man:()=>import('@/views/myehome/index'),
  Person:()=>import('@/views/myehome/myMessage/index'),
  Jifen:()=>import('@/views/myehome/intergrl/index'),
  Xgmm:()=>import('@/views/myehome/changePassword/index'),
  Dfjiaona:()=>import('@/views/myehome/partypay/index'),
  Jfdetail:()=>import('@/views/myehome/intergrl/detail'),

}
const router=new Router({

  routes: [
    {
      path: '/',
      name: 'layout',
      component: components.Layout,
    },
    {
      path: '/tz',
      component: components.Tz,
    },
    {
      path: '/man',
      component: components.Man,
    },
    {
      path: '/login',
      name: '',
      meta: {
      },
      component: components.Login,
    },
    {
      path:'/xgnews',
      component:components.Xgnews
    },
    {
      path:'/djone',
      component:components.Djone
    },
    {
      path:'/dylsf',
      component:components.Dylsf
    },
    {
      path:'/zslife',
      component:components.Zslife
    },{
      path:'/dyhd',
      component:components.Dyhd
    },{
        path:'/person',
      component:components.Person
    },{
        path:'/jifen',
      component:components.Jifen
    },
    {
      path:'/xgmm',
      component:components.Xgmm
    }
    ,{
    path:'/dfjiaona',
      component:components.Dfjiaona
    },
    {
      path:'/jfdetail',
      component:components.Jfdetail
    },
    {
      path:'/history',
      component:components. History
    },
    {
      path:'/anytime',
      component:components.Anytime
    }
    ,{
      path:'/shootanywhere',
      component:components.ShootAnywhere
    },
    {
      path:'/thinkreport',
      component:components.Thinkreport
    },
    {
      path:'/baidumap',
      component:components.Baidumap
    }

  ]
})
export default router
