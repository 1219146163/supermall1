<template>
  <div id="home">
   <navbar class="home-navbar">
     <div slot="center">购物车</div>
   </navbar> 
      <home-swiper :banners="banners"/>
      <RecommendView :recommends="recommends"></RecommendView>
      <FeatureView></FeatureView>
      <tabControl class="tabcontrol" :title="['流行','新款','精选']"></tabControl>

      <ul>
        <li>1</li>
             <li>1</li>
                  <li>1</li>
                       <li>1</li>
                            <li>1</li>
                                 <li>1</li>
                                      <li>1</li>
                                           <li>1</li>
                                                <li>1</li>
                                                     <li>1</li>
                                                          <li>1</li>
                                                               <li>1</li>
                                                                    <li>1</li>
                                                                         <li>1</li>
                                                                              <li>1</li>
                                                                                   <li>1</li>
                                                                                   <li>1</li>
             <li>1</li>
                  <li>1</li>
                       <li>1</li>
                            <li>1</li>
                                 <li>1</li>
                                      <li>1</li>
                                           <li>1</li>
                                                <li>1</li>
                                                     <li>1</li>
                                                          <li>1</li>
                                                               <li>1</li>
                                                                    <li>1</li>
                                                                         <li>1</li>
                                                                              <li>1</li>
                                                                                   <li>1</li>
                                                                                   <li>1</li>
             <li>1</li>
                  <li>1</li>
                       <li>1</li>
                            <li>1</li>
                                 <li>1</li>
                                      <li>1</li>
                                           <li>1</li>
                                                <li>1</li>
                                                     <li>1</li>
                                                          <li>1</li>
                                                               <li>1</li>
                                                                    <li>1</li>
                                                                         <li>1</li>
                                                                              <li>1</li>
                                                                                   <li>1</li>
      </ul>
  </div>
</template>

<script>

 import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'

import navbar from 'components/common/navbar/NavBar'
import tabControl from 'components/content/tabControl/TabControl'

import {getHomeMultidata, getHomeGoods} from 'network/home'


export default {
    name:'home',
    components:{
      navbar,
       HomeSwiper,
       RecommendView,
       FeatureView,
       tabControl
    
  
    },
    data(){
      return{
       banners:[],
       recommends:[],
       goods:{
         'pop':{ page:0, list :[]},
         'new': { page:0, list :[]},
         'sell':{ page:0, list :[]}

       }
      }
    },
    created(){  //生命周期，当创建完就调用这里的函数
       this.getHomeMultidata()
       this.getHomeGoods('pop')
       this.getHomeGoods('new')
       this.getHomeGoods('sell')
    },
    methods:{
      getHomeMultidata(){
         getHomeMultidata().then(res=>{
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list
     console.log(res)
        })
      },
      getHomeGoods(type){
        const page = this.goods[type].page + 1
        getHomeGoods(type,page).then(res =>{
          this.goods[type].list.push(...res.data.list)
          this.goods[type].page +=1
        })
      }
    }
}
</script>

<style>
.home-navbar{
  background-color: green;
  color: aliceblue;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
 z-index: 999;
}
.tabcontrol{
  position: sticky;
  top: 44px;
}
</style>