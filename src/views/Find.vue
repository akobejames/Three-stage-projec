<!--
 * @Description: 
 * @Author: 付涵
 * @Date: 2019-07-18 10:27:10
 * @LastEditTime: 2019-07-23 09:06:49
 * @LastEditors: 付涵
 -->
<!-- 发现页面 -->
<template>
  <div>
<!-- 中间内容 -->
<div id="fhmain">


	<router-view ></router-view>

</div>



 <!-- 底部标签栏 -->
 <div  id="fh-footer">
    <van-tabbar

      v-model="fhactive"
     
    >
      <van-tabbar-item
        icon="home-o"
        to="/index"
      >推荐</van-tabbar-item>
      <van-tabbar-item
        icon="search"
        to="/find"
      >发现</van-tabbar-item>
      <van-tabbar-item
        icon="description"
        to="/order"
      >订单</van-tabbar-item>
      <van-tabbar-item
        icon="user-o"
        to="/myself"
      >我的</van-tabbar-item>
    </van-tabbar>
    </div>
  </div>



</template>

<script>
export default {
  data () {
    return {
         active: 0,
         fhactive:1
    };
  },

  methods: {
    fhbtn(){
      this.$router.push('/tripdal')
    },
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
      },
  }
}

</script>
<style scoped>
/* .fhtravel{
  margin-top:51px;
} */
#fh-footer{
  position: relative;
  z-index: 100;
}
#fhmain{
  margin-bottom: 50px;
}
.title{
  position: absolute;
  bottom:8rem;
  left:2rem;
  z-index: 20;
}
.content{
  position: absolute;
  bottom:6.5rem;
  left:2rem;
  z-index: 20;
}
.tip{
  position: absolute;
  bottom:7rem;
  left:17rem;
  z-index: 20;
}
.van-grid-item{
  position: relative;
}
.Stitle{
  position: relative;
  left:-4rem;
  width:12rem;
   overflow: hidden;
  word-break: keep-all;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

}
.photo{
 width:5rem;
 height:5rem;
 
 border-radius: 50%
   
}
.fhcom{
    padding:15px 10px;
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
    margin-left:40px;
    
}
.fhpingjia{
    font-size:15px;
    color:#cecece;
}
</style>