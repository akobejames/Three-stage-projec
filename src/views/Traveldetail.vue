<!--
 * @Description: 
 * @Author: 付涵
 * @Date: 2019-07-22 10:52:28
 * @LastEditTime: 2019-07-25 22:26:12
 * @LastEditors: 张坤贺
 -->

<template>
  <div style="position: relative;">
    <van-nav-bar left-arrow @click-left="onClickLeft">
      <van-icon name="chat-o" slot="right" info="3" color="black" size="20px" style="margin-right:10px" @click="fhicon()" />
      <van-icon name="weapp-nav" slot="right" size="20px" @click="onClickRight" />
    </van-nav-bar>
    <!-- 加载的数据 -->
    <!-- 大图片 -->
    <div class="img">
      <van-image fit="cover" :src="detail.imgs" width="100%" />
      <p>{{detail.type}}|{{detail.fdname}}<span>阅读量：{{detail.price}}</span></p>
      <h3>{{detail.title}}</h3>
    </div>

    <!-- <p>{{list[0].des2}}</p>
    <p>{{list[0].des2}}</p>
    <van-image fit="cover" :src="list[1].imgs" width="100%" />
    <p>{{list[0].des2}}</p>
    <p>{{list[0].des2}}</p>
    <van-image fit="cover" :src="list[2].imgs" width="100%" /> -->
    <van-row v-for="item in detail.conlist">
      <van-col span="22" offset="1">
        <p>{{item.des1}}</p>
        <van-image fit="cover" :src="item.imgs" width="100%" />
        <p>{{item.des2}}</p>
      </van-col>
    </van-row>
  </div>

</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      msg: "",
      detail: {},
      pid: "",
      list: []
    };
  },
  methods: {
    //返回上一页
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      this.$router.push("/sharep");
    },
    fhicon() {
      this.$router.push("/comments");
    }
  },
  beforeCreate() {
    //console.log(this.$route.query.pid); //实际要用这个数据发请求
    axios({
      url: "http://www.getstorydetial/api"
      // params: {
      //   id: this.$route.query.id
      // }
    }).then(data => {
      // this.detial = data;
      this.detail = data.data.travelstorydetial;
      this.list = data.data.travelstorydetial.conlist;
      console.log(this.detail);
      console.log(this.list);
    });
  }
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
  color: #ccc;
}
.img p span {
  float: right;
}
</style>