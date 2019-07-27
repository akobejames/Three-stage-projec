<!--
 * @Description: 
 * @Author: 付涵
 * @Date: 2019-07-22 10:52:28
 * @LastEditTime: 2019-07-25 21:53:18
 * @LastEditors: 付涵
 -->

<template>
  <div style="position: relative;">
    <van-nav-bar left-arrow @click-left="onClickLeft">
      <van-icon
        name="chat-o"
        slot="right"
        info="9"
        color="black"
        size="20px"
        style="margin-right:10px"
      />
      <van-icon name="weapp-nav" slot="right" size="20px" @click="onClickRight" />
    </van-nav-bar>
    <!-- 加载的数据 -->
    <!-- 大图片 -->
    <div class="img">
      <van-image fit="cover" :src="detial.imgs" width="100%" />
      <p>{{detial.title}}|2017/10/20<span>阅读量：{{detial.type}}</span></p>
      <h3>{{detial.des}}</h3>
    </div>

    <div v-for="item in detial.conlist">
      <p>{{item.des1}}</p>
      <p>{{item.des2}}</p>
      <van-image fit="cover" :src="item.imgs" width="100%" />
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Travelstorydetial",
  data() {
    return {
      msg: "travelstorydetial页面",
      detial: {},
      pid: ""
    };
  },
  methods: {
    //返回上一页
    onClickLeft() {
      this.$router.go(-1);
    },
    //跳转到分享页面
    onClickRight() {
      this.$router.push("/sharep");
    }
  },
  beforeCreate() {
     console.log(this.$route.query.pid); //实际要用这个数据发请求
    axios({
      url: "http://106.13.26.54:8080/selectFoodById"
    }).then(data => {
      this.detial = data.data.travelstorydetial;
      console.log(this.detial);
    });
  },
 
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.img {
  position: relative;
}

.img p {
  font-size: 16px;
  margin: 0 10px 10px;
  padding: 0;
font-size: 12px;
color:#ccc;
}
.img p span{
    float:right;
}
</style>