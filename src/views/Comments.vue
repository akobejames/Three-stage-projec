<!--
 * @Description: 
 * @Author: 付涵
 * @Date: 2019-07-18 15:32:54
 * @LastEditTime: 2019-07-25 21:50:24
 * @LastEditors: 付涵
 -->
<!-- 热门评论 -->
<template>
  <div id="inner">
          <van-tabs
     @click="onClick"

      v-model="active"
      >
        <van-tab title="旅行攻略">
          
        </van-tab>
        <van-tab title="出行专题">
      
        </van-tab>
        <van-tab title="房东故事">

        </van-tab>
        <van-tab title="用户评论">
            
            <div 
            class="fhcom" 
            v-for="(value, index) in list" :key="index"
            >
        <img  class="fhphoto" :src="value.userImg"/>
        <div class="fhname">{{value.nickName}}
            <span class="fhcity">入住城市 {{value.city}}</span>
       
        </div>
         <van-button class="fhbtn" round  type="info" @click="tap()">调用房源</van-button>
        <div class="fhpingjia">{{value.comment}}</div>
        <van-divider />
      </div>
        </van-tab>
      </van-tabs>


      
     
  </div>
</template>

<script>
import axios from "axios";
export default {
  data () {
    return {
        active:3,
        list:[]
    };
  },
  beforeCreate() {
     axios({
    url:"http://106.13.26.54:8080/selectCommentAll"
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
      tap(){
          this.$router.push('/hoteldetail')
      }
  }
}

</script>
<style scoped>

.fhphoto{
 width:60px;
 height:60px;
 
 border-radius: 50%
   
}
.fhcom{
    padding:15px 10px;
    position: relative;
}
.fhname{
    display:inline;
    position: relative;
    bottom: 40px;
    left:10px;
}
.fhcity{
    margin-left:5px ;
    font-size:10px;
    color:#ccc;
}
.fhbtn{
   position: absolute;

    right:20px;
   top:30px; 
    
}
.fhpingjia{
    font-size:15px;
    color:#cecece;
}
</style>