<template>
  <div class="recommend">
      <div v-for="(item,index) in recommends" class="recommend-item" :key="index" >
          <a :href="item.link">
              <img :src="item.image" alt="">
              <div class="title">{{item.title}}</div> 
          </a>
  </div>
  </div>
</template>

<script>
export default {
     name:'RecommendView',
     props:{
         recommends:{
             type:Array,
             default(){
                 return[]
             }
         }
     }
}
</script>

<style scoped> 
.recommend{
    display: flex;
    width: 100%;
    text-align: center;
    font-size: 12px;
    padding-top: 10px;
}
    .recommend-item{
        flex: 1;
    }
    .recommend-item img{
        width: 65px;
        height: 65px;

    }
    .title{
        color: black;
    }
    a{
        
        text-decoration: none;
    }
</style>