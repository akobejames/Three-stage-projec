<!--
 * @Description: 
 * @Author: 陈佳
 * @Date: 2019-07-23 09:30:23
 * @LastEditTime: 2019-07-24 10:51:10
 * @LastEditors: 陈佳
 -->
<template>
  <div class="box">
    <van-nav-bar fixed:true left-arrow @click-left="onClickLeft" title="修改密码" />
    <van-cell-group style="margin:30px 0">
      <p>手机号</p>
      <van-field
        class="inpt"
        v-model="phone"
        center
        clearable
        placeholder="请输入手机号"
        @change="phonevif"
        autofocus
      >
        <van-button slot="button" size="small" style="border:0" @click="getcode">获取验证码</van-button>
      </van-field>
      <p>验证码</p>
      <van-field class="inpt" v-model="code" placeholder="请输入验证码" @change="codevif" />
      <p>新密码</p>
      <van-field class="inpt" v-model="pw" placeholder="请输入新密码" />
      <p>再次输入新密码</p>
      <van-field class="inpt" v-model="repw" placeholder="再次确认密码" @blur="qrmm" />
    </van-cell-group>
    <van-row>
      <van-col span="16" offset="4">
        <van-button
          type="primary"
          style="border-radius:10px;width:100%;font-size:16px"
          size="small"
          @click="save"
          :disabled="savebtn"
        >保存|登录</van-button>
      </van-col>
    </van-row>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Xiugaimima",

  data() {
    return {
      detial: {},
      radio: "1",
      phone: "",
      pw: "",
      repw: "",
      code: "",
      sccode: "",
      savebtn: false
    };
  },
  methods: {
    //返回上一页
    onClickLeft() {
      this.$router.go(-1);
    },
    //手机号格式验证
    phonevif() {
      if (this.phone.length == 0) {
        this.$toast("请输入手机号");
      } else {
        if (!/^1[3456789]\d{9}$/.test(this.phone)) {
          this.$toast("手机号格式不正确,请重新输入");
          this.phone = "";
        }
      }
    },
    //获取验证码
    getcode() {
      if (this.phone == "") {
        this.$toast("请输入手机号");
      } else {
        axios({
          url: "http://10.8.157.25:8080/isExist", //验证手机号是否存在
          params: {
            phone: this.phone
          }
        }).then(data => {
          if (data.data.code == 1) {
            var code = parseInt((Math.random() * 9 + 1) * 100000);
            this.sccode = code;
            this.$notify({
              message: code,
              duration: 3000,
              background: "#1989fa"
            });
            this.$store.commit("loginm", {
              id: data.data.data.id,
              name: data.data.data.account
            });
          } else {
            this.$toast("该手机号还未注册！请先注册");
            this.active = 0;
          }
        });
      }
    },
    //确认密码
    qrmm() {
      if (this.pw !== this.repw) {
        this.$toast("两次输入的密码不一致，请重新输入");
        (this.pw = ""), (this.repw = "");
      }
    },
    //验证码验证
    codevif() {
      if (this.code != this.sccode) {
        this.$toast("验证码输入错误,请重新获取或重新输入");
        this.vifcode = "";
      }
    },
    save() {
      if (
        this.pw == "" ||
        this.repw == "" ||
        this.code == "" ||
        this.phone == ""
      ) {
        this.savebtn = false;
        this.$toast("请按要求输入信息");
      } else {
        axios({
          url: "http://10.8.157.25:8080/updatePassword",
          params: {
            password: this.pw,
            phone: this.phone
          }
        }).then(data => {
          if (data.data.code == 1) {
            this.$store.commit("loginm", {
              id: data.data.data.id,
              name: data.data.data.account
            });
            var token = {
              name: data.data.data.account,
              id: data.data.data.id,
              password:this.pw
            };
            localStorage.setItem("token", JSON.stringify(token));
            this.$router.push("/login");
          } else {
            this.$toast("修改失败");
          }
        });
      }
    }
  },

  mounted() {}
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  height: 600px;
  position: relative;
}
.inpt {
  border: 1px solid #cecece;
  border-radius: 10px;
  margin: 10px;
  width: 94%;
  height: 40px;
  line-height: 28px;
  padding: 6px;
}
p {
  margin: 0;
  padding: 0;
  font-size: 12px;
  margin-left: 16px;
}
</style>
