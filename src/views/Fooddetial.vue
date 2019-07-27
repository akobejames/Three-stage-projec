<!--
 * @Description: 
 * @Author: 陈佳
 * @Date: 2019-07-18 10:57:32
 * @LastEditTime: 2019-07-26 20:05:26
 * @LastEditors: 陈佳
 -->
<template>
  <div style="position: relative;">
    <van-nav-bar left-arrow @click-left="onClickLeft">
      <van-icon
        name="chat-o"
        slot="right"
        :info="detial.star"
        color="black"
        size="20px"
        style="margin-right:10px"
        @click="topl"
      />
      <van-icon
        name="weapp-nav"
        slot="right"
        size="20px"
        @click="onClickRight"
      />
    </van-nav-bar>
    <!-- 加载的数据 -->
    <!-- 大图片 -->

    <div class="img">
      <van-image fit="cover" :src="detial.imgs" width="100%" />
      <div class="des">
        <p>{{ detial.title }}</p>

        <p>{{ detial.city }}</p>

        <p>{{ detial.des }}</p>

        <p>每人￥{{ detial.price }}</p>
      </div>
    </div>

    <!-- 认识一下 -->

    <van-row span="22" style="padding-top:20px">
      <van-col span="12" style="height:60px;" offset="1">
        <h4>认识一下{{ detial.name }}</h4>
      </van-col>
      <van-col span="10">
        <img
          :src="detial.imgs1"
          style="border-radius: 50%;width:50px;height:50px;float:right"
        />
      </van-col>
    </van-row>
    <van-divider :style="{ borderColor: '#BBB' }" />
    <van-row>
      <van-col span="22" offset="1">
        <!-- 活动内容 -->
        <h4>活动内容</h4>
        <p>{{ detial.active }}</p>
        <van-divider :style="{ borderColor: '#BBB' }" />
        <!-- 体验内容 -->
         <h4>体验内容</h4> 
         <p v-for="(tynr,i) in detial.tynr" :key="i" v-text="tynr"></p>
       
        <!-- 备注 -->
        <h4>备注</h4>
        <p style="margin-bottom:20px">{{ detial.beizhu }}</p>
      </van-col>
    </van-row>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Fooddetial",
  data() {
    return {
      msg: "Fooddetial页面",
      detial: {},
      pid: "",
      // foodExperience: {},
      ttt: {}
    };
  },
  beforeRouteEnter(to, from, next) {
    console.log(from.path);
    next();
  },
  methods: {
    //返回上一页
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      //  this.$router.push({name:"Sharep",query:{tynr:JSON.stringify(this.foodExperience)}})
      // this.$store.commit("tynr",this.foodExperience)
      this.$router.push("Sharep");
    },
    topl() {
      this.$router.push("/comments");
    }
  },
  mounted() {
    axios({
      url: "http://www.getfooddetial/api"
      // url: "http://106.13.26.54:8080/selectFoodById",
      // params: {
      //   id: this.$route.query.id
      // }
    }).then(data => {
      console.log(data.data.fooddetial);
      this.detial = data.data.fooddetial;

      // this.foodExperience = data.data.foodExperience;
      //对象深拷贝
    });
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.img {
  position: relative;
}
.des {
  position: absolute;
  left: 5px;
  bottom: 5px;
}
p {
  font-size: 16px;
  margin: 0;
  padding: 0;
}
</style>