<!--
 * @Description: 
 * @Author: 李向阳·
 * @Date: 2019-07-18 20:35:26
 * @LastEditTime: 2019-07-19 20:41:14
 * @LastEditors: 李向阳
 -->
<template>
  <div style="display:flex;flex-direction:column">
    <van-nav-bar title="软件通知" left-arrow @click-left="onClickLeft" style="background:#cecece" />

    <div style="padding-top:5px;border-top:3px solid #cecece;border-bottom:8px solid #cecece;">
      <van-cell-group>
        <van-switch-cell v-model="checked1" title="声音提醒" />
      </van-cell-group>
      <van-cell-group>
        <van-switch-cell v-model="checked2" title="震动提醒" />
      </van-cell-group>
    </div>
  </div>
</template>

<script>
export default {
  name: "Ruanjian",
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  },
  data() {
    return {
      checked1: true,
      checked2: true
    };
  }
};
</script>

<style>
.van-icon-arrow-left:before {
  color: #979797;
}
</style>