<!--
 * @Description: 
 * @Author: 付涵
 * @Date: 2019-07-18 11:19:39
 * @LastEditTime: 2019-07-25 21:52:25
 * @LastEditors: 付涵
 -->
<!-- 旅行攻略 -->
<template>
  <div >
        <van-tabs
     @click="onClick"
    
      v-model="active"
      >
        <van-tab title="旅行攻略">
          
        </van-tab>
        <van-tab title="出行专题">
      <van-grid :column-num="1"   class="fhmaintip">
           
        <van-grid-item
            v-for="(item, i) in list" :key="i"
        >
         <div class="title">{{item.stayCity}}</div>
        <div class="content">{{item.traveladdress}}</div>
       <div class="tip">出行<br>推荐</div>
       <van-image
           style="height:150px"
            fit="cover"
            :src="item.img"
            @click="fhbtn()"
            />
      
        <van-divider />
        </van-grid-item>
    </van-grid>
        </van-tab>
        <van-tab title="房东故事"></van-tab>
        <van-tab title="用户评论"></van-tab>
      </van-tabs>


     
  </div>
</template>

<script>
import axios from "axios";
export default {
  data () {
    return {
      active:1,
      list:[]
    };
  },
  beforeCreate() {
    axios({
    url:'http://106.13.26.54:8080/travelStory'
  }).then(data=>{
    console.log(data)
    this.list=data.data
     console.log(this.list)
  })
  },

  methods: {
     onClick(name,title){
      console.log(name,title)
      if(name==0){
         this.$router.push('/travel')
      }else if(name==1){
         this.$router.push('/trip')
      }else if(name==2){
         this.$router.push('/story')
      }else{
        this.$router.push('/comments')
      }
    },
     fhbtn(){
      this.$router.push('/tripdal')
    },
  }
}

</script>
<style scoped>

.title{
  position: absolute;
  bottom:130px;
  left:50px;
  z-index: 20;
  background-color: aliceblue;
  opacity: 0.6;
}
.content{
  position: absolute;
  bottom:100px;
  left:50px;
  z-index: 20;
   background-color: aliceblue;
    opacity: 0.6;
}
.tip{
  position: absolute;
  top:70px;
  right:60px;
  z-index: 20;
   background-color: aliceblue;
    opacity: 0.6;
}
.van-grid-item{
  position: relative;
}

.fhmaintip{

  position: relative;


}
</style>