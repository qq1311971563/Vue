import VueRouter from 'vue-router'

//项目组件区
import HomeContainer from './components/tabbar/HomeContainer'
import MemberContainer from './components/tabbar/MemberContainer'
import ShopcarContainer from './components/tabbar/ShopcarContainer'
import SearchContainer from './components/tabbar/SearchContainer'

let router = new VueRouter({
  routes: [
    {path:'/', redirect:'/home'},
    {path: '/home', component: HomeContainer},
    {path: '/member', component: MemberContainer},
    {path: '/shopcar', component: ShopcarContainer},
    {path: '/search', component: SearchContainer}
  ],
  linkActiveClass: 'mui-active'
});

export default router
