<template>
  <div id="home">
   <navbar class="home-navbar">
     <div slot="center">购物车</div>
   </navbar> 
      <home-swiper :banners="banners"/>
      <RecommendView :recommends="recommends"></RecommendView>
  </div>
</template>

<script>
import navbar from 'components/common/navbar/NavBar'
 import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'

import {getHomeMultidata} from 'network/home'


export default {
    name:'home',
    components:{
      navbar,
       HomeSwiper,
       RecommendView
    
  
    },
    data(){
      return{
       banners:[],
       recommends:[]
      }
    },
    created(){  //生命周期，当创建完就调用这里的函数
     getHomeMultidata().then(res=>{
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list
     console.log(res)
     })
    }
}
</script>

<style>
.home-navbar{
  background-color: green;
  color: aliceblue;
}
</style>