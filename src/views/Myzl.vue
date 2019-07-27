<!--
 * @Description: 
 * @Author: 李向阳·
 * @Date: 2019-07-19 15:02:51
 * @LastEditTime: 2019-07-19 20:40:54
 * @LastEditors: 李向阳
 -->
<template>
  <div>
    <van-nav-bar title="我的资料" left-arrow @click-left="onClickLeft" style="background:#a2a2a2" />

    <van-steps :active="active" style="height:90px;background:#A2A2A2;margin-top:10px">
      <van-step>完善资料</van-step>
      <van-step>审核</van-step>
      <van-step>开启成功</van-step>
    </van-steps>

    <van-row style="height:120px;background:#cecece;padding-top:10px">
      <van-col span="8"></van-col>
      <van-col span="8" style="text-align:center">
        <img
          src="https://img.yzcdn.cn/vant/cat.jpeg"
          style="magin-top:10px;width:67px;height:67px; border-radius:50%"
        />
        <p style="margin:0 auto;text-align:center;height:20px">这里是用户名</p>
      </van-col>
      <van-col span="8"></van-col>
    </van-row>

    <van-cell title="姓名" value="用户名" />
    <van-cell title="性别" value="点击选择" @click="showPopup1" />
    <van-cell title="常用手机" value="内容" />
    <van-cell title="出生日期" value="内容" />
    <van-cell title="邮箱地址" value="内容" />
    <van-cell title="所在城市" value="内容" />
    <van-cell title="故乡" value="内容" />
    <van-cell title="血型" value="点击选择" @click="showPopup2" />
    <van-cell title="QQ" value="内容" />

    <van-popup
      v-model="show2"
      style="display:flex;justify-content:space-around;width:60%;height:40px;text-align:center;line-height:40px"
    >
      <span>A</span>
      <span>B</span>
      <span>AB</span>
      <span>O</span>
    </van-popup>

    <van-popup
      v-model="show1"
      style="display:flex;justify-content:space-around;width:60%;height:40px;text-align:center;line-height:40px"
    >
      <span>男</span>
      <span>女</span>
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "Myzl",
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    showPopup2() {
      this.show2 = true;
    },
    showPopup1() {
      this.show1 = true;
    }
  },
  data() {
    return {
      show2: false,
      show1: false
    };
  }
};
</script>

<style>
.van-step--horizontal .van-step__title {
  font-size: 18px;
  top: 38px;
}
.van-step--horizontal .van-step__line {
  height: 12px;
  top: 42px;
  background: #cccc;
}
.van-step__circle-container {
  height: 18px;
  background: #cecece;
  border-radius: 40%;
}
.van-step--horizontal .van-step__circle-container {
  top: 46px;
}
.van-step {
  color: #000;
}
.van-icon-arrow-left:before {
    color:#979797
}
</style>