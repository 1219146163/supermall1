<template>
  <div class="warpper">
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

import bscroll from 'better-scroll'

export default {
  name :'category',
  data(){
    return{
      scroll:null
    }
  },
  mounted(){
    this.scroll = new bscroll(document.querySelector('.warpper'),()=>{
      probeType:3
    
    })
  }
    
}
</script>

<style scoped>
  
.warpper{
  height: 200px;
  background: red;
}

</style>