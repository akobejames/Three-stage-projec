<!--
 * @Description: 
 * @Author: 陈佳
 * @Date: 2019-07-18 22:31:00
 * @LastEditTime: 2019-07-25 22:11:45
 * @LastEditors: 陈佳
 -->

<template>
  <div class="box">
    <van-nav-bar fixed:true left-arrow @click-left="onClickLeft" />
    <!-- <img src="../assets/logo.png" style="width:100%"> -->
    <div class="inner">
      <van-image fit="cover" src="https://img.yzcdn.cn/vant/cat.jpeg" width="100%"  />
      <!-- <van-skeleton title :row="3" />
      <br />
      <van-skeleton title :row="3" />-->
      <van-row>
        <van-col span="22" offset="1">
          <h4>体验内容</h4>
          <van-divider :style="{  borderColor: '#BBB' }" />
          <van-row>
            <van-col span="22" offset="1">
              <p>1.{{tynr[0]}}</p>
              <p>2.{{tynr[1]}}</p>
              <p>3.{{tynr[2]}}</p>
            </van-col>
          </van-row>
          <!-- <p v-for="item in tynr">{{item}}</p> -->
          <!-- <van-divider :style="{  borderColor: '#BBB' }" /> -->
        </van-col>
      </van-row>
    </div>
    <div class="shareBox">
      <share :config="config" style="font-size:40px"></share>
    </div>
  </div>
  
</template>
<script>
import axios from "axios";
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "Sharep",
  data() {
    return {
      msg: "Share页面",
      tynr: ["吃",'喝','玩'],
      logoimgs: require("../assets/logo.png"),
      config: {
        url: "http://www.baidu.com", // 网址，默认使用 window.location.href
        source: "", // 来源（QQ空间会用到）, 默认读取head标签：<meta name="site" content="http://overtrue" />
        title: "hello", // 标题，默认读取 document.title 或者 <meta name="title" content="share.js" />
        description: "hi", // 描述, 默认读取head标签<meta name="description" content="PHP弱类型的实现原理分析" />
        image: "", // 图片, 默认取网页中第一个img标签
        sites: ["qzone", "qq", "weibo", "wechat"], // 启用的站点

        wechatQrcodeTitle: "微信扫一扫：分享", // 微信二维码提示文字
        wechatQrcodeHelper:
          "<p>微信里点“发现”，扫一下</p><p>二维码便可将本文分享至朋友圈。</p>"
      }
    };
  },
  methods: {
    //返回上一页
    onClickLeft() {
      this.$router.go(-1);
    }
  },
   computed: {
    ...mapState(['sname','tiyanneir']),
    // ...mapGetters([])
  },
  mounted() {
   // console.log(this.$store.state.tiyanneir);
  },
  
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  position: relative;
}
.shareBox {
  width: 100%;
  height: 100px;
  background: #ecebeb;
  position: absolute;
  bottom: 0;
  padding-left: 90px;
  padding-top: 40px;
  top:540px
}
</style>