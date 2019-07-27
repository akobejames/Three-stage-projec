<!--
 * @Description: 
 * @Author: 李向阳·
 * @Date: 2019-07-18 19:59:17
 * @LastEditTime: 2019-07-20 19:55:38
 * @LastEditors: 李向阳
 -->
<template>
  <div>
    <van-nav-bar title="账户" left-arrow @click-left="onClickLeft" style="background:#cecece" />
    <div style="padding-top:10px;">
      <van-cell class="cell1" title="添加邮箱" is-link  to="/tjemail" :value="$store.state.email"/>
      <van-cell class="cell1" title="绑定手机号" is-link to="/phonenumber" :value="$store.state.pnumber"/>
      <van-cell class="cell1" title="修改登录密码" is-link to="/xiugaimima"/>
    </div>
    <hr />

    <div style="padding-top:10px;background:#fff">
      <van-cell-group>
        <van-switch-cell v-model="checked1" title="绑定新浪微博" />
      </van-cell-group>
      <van-cell-group>
        <van-switch-cell v-model="checked2" title="绑定QQ" />
      </van-cell-group>
      <van-cell-group>
        <van-switch-cell v-model="checked3" title="绑定微信" />
      </van-cell-group>
    </div>
  </div>
</template>

<script>


export default {
  name: "Zhanghu",
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    acp(){
      this.$store.commit("loginm", this.ss)
    }
  },
  data() {
    return {
      checked1: true,
      checked2: true,
      checked3: true,
      ss:''
    };
  } 
};
</script>

<style>
.van-icon-arrow-left:before {
  color: #979797;
}
</style>