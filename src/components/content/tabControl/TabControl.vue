<template>
  <div class="tabControl">
 
          <div v-for="(item,index) in title" :key="index" class="tabControlitem" 
          :class="{active:index===tabindex}" @click="tabClick(index)">
          <span>{{item}}</span>
        
      </div>
  </div>
</template>

<script>
export default {
     name:'tabControl',
     props:{
        title:{
            type:Array,
            defalut(){
                return[]
            }
        }
     },
     data(){
         return{
             tabindex:0
         }
     },
     methods:{
         tabClick(index){
             this.tabindex =index
         }
     }
}
</script>

<style>
  .tabControl{
      display: flex;
      text-align: center;
      background:#fff;
      height: 40px;
      line-height: 40px;
  }
  .tabControlitem{
      flex: 1;
      padding: 15px;
    
  }
  .active{
      color: crimson;
     
  }
 .active span{
    border-bottom: solid 3px red;
       
  }
</style>