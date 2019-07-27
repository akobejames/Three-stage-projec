<!--
 * @Description: 
 * @Author: 李向阳·
 * @Date: 2019-07-19 19:27:17
 * @LastEditTime: 2019-07-20 09:40:04
 * @LastEditors: 李向阳
 -->
<template>
  <div>
    <van-nav-bar title="意见反馈" left-arrow @click-left="onClickLeft" style="background:#cecece;color:#646464" />
    <div style="margin-left:16px;padding-bottom:30px;border-bottom:1px solid #ceccce">
      <h1 style="font-size:28px;font-weight:normal;margin-top:50px;color:#646464;height:40px;line-height:40px">您的建议</h1>
      <p style="margin-top:15px;color:#aaa;font-size:14px;">提出您的意见反馈</p>
    </div>
    <div class="fd" style="margin:20px 16px;padding-bottom:20px;border-bottom:1px solid #ceccce">
      <p>1.如何使用优惠券，为什么下单没有减免？</p>
      <p>2.房东未确认订单，已经付款了怎么办？</p>
      <p>3.房东退款什么时候到账？</p>
      <h3 style="margin-top:15px;color:#9d9d9d;font-weight:normal;font-size:20px;">查看更多</h3>
    </div>
    <van-tabs v-model="active">
      <van-tab title="遇到问题"><textarea placeholder="请输入您要反馈的问题（200字以内）" style="width:80%;height:100px;border:1px solid #cecece;background:#cecece;margin-top:10px;margin-left:30px;"></textarea></van-tab>
      <van-tab title="功能建议"><textarea placeholder="请输入您要反馈的问题（200字以内）" style="width:80%;height:100px;border:1px solid #cecece;background:#cecece;margin-top:10px;margin-left:30px;"></textarea></van-tab>
    </van-tabs>
    <p style="margin-left:27px;margin-top:20px;padding-bottom:10px;color:#646464;border-bottom:1px solid #cecece">请提供相关问题截图或证明（选填,不超过4张）</p>
    <van-uploader v-model="fileList" multiple :max-count="4" style="margin-left:30px" />
    <input type="text" placeholder="请输入您的手机号码" style="margin-left:30px;margin-top:7px;width:80%;height:30px">
    <div style="margin-left:30px;text-align:center;color:#646464;line-height:30px;margin-top:8px;width:80%;height:30px;background:#d0d0d0">提交</div>
  </div>
</template>

<script>
export default {
  name: "Suggestion",
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  },
  data() {
    return {
      active: "0",
      fileList: []
    };
  }
};
</script>

<style>
.fd p {
  line-height: 22px;
  height: 22px;
  font-size: 16px;
  margin-top: 8px;
  color: #9d9d9d;
}
.van-icon-arrow-left:before {
  color: #979797;
}
.van-nav-bar__title {
  color: #979797;
}
</style>