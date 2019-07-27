<!--
 * @Description: 
 * @Author: 陈佳
 * @Date: 2019-07-18 10:57:32
 * @LastEditTime: 2019-07-26 09:32:14
 * @LastEditors: 陈佳
 -->
<template>
  <div style="position: relative;">
    <van-nav-bar left-arrow @click-left="onClickLeft">
      <van-icon name="chat-o" slot="right" :info="detial.star" color="black" size="20px" style="margin-right:10px" @click="topl" />
      <van-icon name="weapp-nav" slot="right" size="20px" @click="onClickRight" />
    </van-nav-bar>
    <!-- 加载的数据 -->
    <!-- 大图片 -->
    <div class="img">
      <van-image fit="cover" :src="detial.imgs" width="100%" />
      <p>{{detial.city}}|{{detial.type}}</p>
      <h3>{{detial.des}}</h3>
    </div>
    <!-- 认识一下 -->
    <van-row style="height:100px;padding-top:20px">
      <van-col span="4">
        <img :src="detial.fdimgs" style="border-radius: 50%;width:50px;height:50px;float:left;margin-top:15px" />
      </van-col>
      <van-col span="4">
        <h4>
          {{detial.name}}
          <br />4周前
        </h4>
        <h4></h4>
      </van-col>
    </van-row>

     <van-row v-for="item in detial.conlist" :key="item.des1">

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
  name: "Travelstorydetial",
  data() {
    return {
      msg: "travelstorydetial页面",
      detial: {},
      pid: "",
      foodExperience: {}
    };
  },
  // beforeRouteLeave: (to, from, next) => {
  //   if (to.path=="/myself") {
  //     if(this.$store.state.sname){
  //       next();
  //     } else{
  //        next(false);
  //     }
  //   } else {
  //     next();
  //   }
  // },
  methods: {
    //返回上一页
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      // this.$store.commit("tynr", this.foodExperience);
      this.$router.push("/sharep");
    },
    topl() {
      this.$router.push("/comments");
    }
  },
  created() {
    console.log(this.$route.query.id); //实际要用这个数据发请求
    axios({
      url: "http://www.getstorydetial/api"
      // url: "http://106.13.26.54:8080/selectFoodById",
      // params: {
      //   id: this.$route.query.id
      // }
    }).then(data => {
      this.detial = data.data.travelstorydetial;
      // this.foodExperience = data.data.foodExperience;
      // console.log(this.foodExperience);
    });
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.img {
  position: relative;
}

p {
  font-size: 16px;
  margin: 0;
  padding: 0;
}
</style>