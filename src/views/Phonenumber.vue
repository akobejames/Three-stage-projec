<!--
 * @Description: 
 * @Author: 李向阳·
 * @Date: 2019-07-20 15:24:29
 * @LastEditTime: 2019-07-20 20:57:55
 * @LastEditors: 李向阳
 -->
<template>
  <div style="display:flex;flex-direction:column">
    <van-nav-bar title="绑定手机号" left-arrow @click-left="onClickLeft" style="background:#cecece" />
    <input
      type="text"
      v-model="pnumber"
      style="width:70%;margin-top:50px;height:50px;margin-left:15%;border: 1px solid #666;"
    />
    <van-button type="info" size="large" style="margin-top:10px" @click="save">保存</van-button>
  </div>
</template>

<script>
/* import axios from "axios"; */
export default {
  name: "Phonenumber",
  data() {
    return {
      pnumber: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    save() {
      if (this.pnumber.length == 0) {
        this.$toast("请输入手机号");
      } else if (!/^1[3456789]\d{9}$/.test(this.pnumber)) {
        this.$toast("手机号格式错误，请重新输入");
        this.pnumber = "";
      } else {
        this.$toast("格式正确");

         this.$store.commit("msg3",this.pnumber)
        this.$router.push({name:'Zhanghu'})

        /* axios({
          url: "http://mvub3b.natappfree.cc/PersonalCentre",
          params: { phone: this.pnumber } //缺少id
        }).then(data => {
          console.log(data);
        }); */
      }
    }
  }
};
</script>

<style>
.van-icon-arrow-left:before {
  color: #979797;
}
</style>