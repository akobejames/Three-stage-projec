<!--
 * @Description: 
 * @Author: 李向阳·
 * @Date: 2019-07-20 15:24:29
 * @LastEditTime: 2019-07-20 17:37:28
 * @LastEditors: 李向阳
 -->
<template>
  <div>
    <van-nav-bar title="绑定邮箱" left-arrow @click-left="onClickLeft" style="background:#cecece" />
    <input type="text" v-model="email" style="width:70%;margin-top:50px;height:50px;margin-left:15%;border: 1px solid #666;" placeholder="xxx@xxx.com" />
    <van-button type="info" size="large" style="margin-top:10px" @click="save">保存</van-button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Tjemail",
  data() {
    return {
      email: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    save() {
      if (this.email.length == 0) {
        this.$toast("请输入邮箱");
      } else if (
        !/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(
          this.email
        )
      ) {
        this.$toast("邮箱格式错误，请重新输入");
        this.email = "";
      } else {
        //this.$toast("格式正确");      
        this.$store.commit("msg2",this.email)
        this.$router.push({name:'PersonalInformation'})
      /*   let name = this.$store.state.sname;
        console.log(name);
        axios({
          url: "http://10.8.157.25:8080/PersonalCentre",
          params: { email: this.email } //缺少id
        }).then(data => {
          console.log(data.data.data);
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