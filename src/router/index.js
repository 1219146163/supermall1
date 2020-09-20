import Vue from 'vue'

import VueRouter from 'vue-router'


const Cart = () => import('../views/cart/cart.vue')
const Category = () => import('../views/category/category.vue')
const Home = () => import('../views/home/home.vue')
const Profile = () => import('../views/profile/profile.vue')

Vue.use(VueRouter)


const router = new VueRouter({
    routes:[
       {
      path:'',
      redirect:'/home'
    },
    {
      path:'/cart',
      component:Cart
    },
    {
      path:'/category',
      component:Category
    },
    {
      path:'/home',
      component:Home
    },
    {
      path:'/profile',
      component:Profile
    },
    ],
    mode:'history'
})

export default router