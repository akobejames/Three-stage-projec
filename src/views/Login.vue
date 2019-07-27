<!--
 * @Description: 
 * @Author: 陈佳
 * @Date: 2019-07-18 09:46:31
 * @LastEditTime: 2019-07-26 09:43:04
 * @LastEditors: 陈佳
 -->
<template>
  <div >
    <!--登录上方图片-->
    <van-row type="flex" justify="center">
      <van-col>
        <van-image
          width="100vw"
          fit="contain"
          src="http://img0.imgtn.bdimg.com/it/u=1263615210,733703364&fm=26&gp=0.jpg"
        />
      </van-col>
    </van-row>

    <div class="inner">
      <!-- 账号密码登录 -->
      <van-tabs v-model="active">
        <van-tab title="账号登录">
          <van-cell-group>
            <van-field
              v-model="username"
              label="账号"
              placeholder="请输入用户名"
              @change="chinese()"
            />
            <van-field
              v-model="password"
              type="password"
              label="密码"
              placeholder="请输入密码"
              :error-message="emsgpw"
            />
          </van-cell-group>

          <van-row style="font-size:12px">
            <van-col span="8" offset="3">
              <van-checkbox v-model="checked">记住密码</van-checkbox>
            </van-col>
            <van-col span="8" offset="2">
              <router-link to="/xiugaimima">忘记密码？</router-link>
            </van-col>
          </van-row>

          <van-row type="flex" justify="center" style="margin-top:20px">
            <van-col span="8">
              <van-button round type="primary" size="small" @click="login"
                >登录</van-button
              >
            </van-col>
            <van-col span="8">
              <van-button round type="info" size="small" @click="regist"
                >注册</van-button
              >
            </van-col>
          </van-row>
        </van-tab>

        <!-- 手机号登录 -->
        <van-tab title="手机号登录">
          <van-cell-group>
            <van-field
              v-model="phone"
              label="手机号"
              placeholder="请输入手机号"
              :error-message="emsgp"
              autofocus
              @change="phonevif"
            >
              <van-button
                slot="button"
                size="small"
                type="primary"
                @click="getcode"
                >发送验证码</van-button
              >
            </van-field>
            <van-field
              v-model="vifcode"
              center
              clearable
              label="验证码"
              placeholder="请输入验证码"
              @change="codevif"
            ></van-field>
          </van-cell-group>
          <van-row type="flex" justify="center" style="margin-top:20px">
            <van-col span="8">
              <van-button round type="primary" size="small" @click="loginp"
                >登录</van-button
              >
            </van-col>
          </van-row>
        </van-tab>
      </van-tabs>    
    </div>

    <!-- 底部信息图表和协议 -->
    <div style="margin-top:60px;">
      <van-row
        type="flex"
        justify="center"
      >
        <van-col>
          <van-icon
            name="umbrella-circle"
            size="35px"
          />
        </van-col>
        <van-col>
          <van-icon
            name="umbrella-circle"
            size="35px"
          />
        </van-col>
        <van-col>
          <van-icon
            name="umbrella-circle"
            size="35px"
          />
        </van-col>
      </van-row>
      <van-row
        type="flex"
        justify="center"
        style="font-size:12px;"
      >
        <van-col>登录即代表同意我们的服务协议和隐私政策</van-col>
      </van-row>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "Login",
  data() {
    return {
      active: 0,
      username: "",
      phone: "",
      password: "",
      emsgp: "",
      emsgpw: "",
      checked: true,
      vifcode: "",
      sccode: ""
    };
  },
  computed: {
    ...mapState(["sname"])
  }, //更新
  mounted() {
    //记住密码  取密码
    if (localStorage.getItem("token")) {
      var token = localStorage.getItem("token");
      if (token.indexOf("password") > -1) {
        token = JSON.parse(token);
        this.username = token.name;
        this.password = token.password;
      }
    }

    //    axios({
    //         url:"http://10.8.157.25:8080/isExist",
    //         params:{
    //           phone:this.phone
    //         }
    //       }).then((data)=>{
    //         console.log(data)
    //       })
  },

  methods: {
    ...mapActions(["loginm"]),
    //验证手机号格式
    phonevif() {
      if (this.phone.length == 0) {
        this.$toast("请输入手机号");
      } else {
        if (!/^1[3456789]\d{9}$/.test(this.phone)) {
          this.emsgp = "手机号格式不正确";
          this.$toast("手机号格式不正确,请重新输入");
          this.phone = "";
        } else {
          this.emsgp = "";
        }
      }
    },
    chinese(){
         this.$toast("用户名不能包含中文，格式为数字、字母或者下划线");
    },

    //获取验证码
    getcode() {
      if (this.phone == "") {
        this.$toast("请输入手机号");
      } else {
        axios({
          url: "http://106.13.26.54:8080/isExist", //验证手机号是否存在
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

    //验证码验证
    codevif() {
      if (this.vifcode != this.sccode) {
        this.$toast("验证码输入错误,请重新获取或重新输入");
        this.vifcode = "";
      }
    },
    loginp() {
      if (this.phone == "") {
        this.$toast("请输入手机号");
      } else {
        if (this.codevif == "") {
          this.$toast("请输入验证码");
        } else {
          var token = {
            name: this.$store.state.sname,
            id: this.$store.state.userid
          };

          localStorage.setItem("token", JSON.stringify(token));
          this.$router.push("/index");
        }
      }
    },
    login() {
      axios({
        url: "http://106.13.26.54:8080/login",
        params: {
          account: this.username,
          password: this.password
        }
      })
        .then(data => {
          console.log(data);
          if (data.data.code == 1) {
            //alert("登录成功！")
            this.$store.commit("loginm", {
              id: data.data.data.id,
              name: data.data.data.account
            });
            var token = {
              name: data.data.data.account,
              id: data.data.data.id
            };
            if (this.checked) {
              token.password = this.password;
            }
            //存储token到本地
            localStorage.setItem("token", JSON.stringify(token));
            this.$router.push("/index");
          } else {
            this.$toast("用户名或密码错误");
          }
        })
        .catch(err => {
          console.log(err);
          this.$toast("用户名或密码错误");
          this.username = "";
          this.password = "";
        });
    },

    regist() {
      if (this.username != "" && this.password != "") {
        axios({
          url: "http://106.13.26.54:8080/insertUser",
          params: {
            account: this.username,
            password: this.password
          }
        })
          .then(data => {
            console.log(data);
            console.log(data.data);
            //alert("注册成功！")
            if (data.data.code == 1) {
              var token = {
                
                name: data.data.data.account,
                id: data.data.data.id 
              };
              if (this.checked) {
                token.password = this.password;
              }
              //存储token到本地
              localStorage.setItem("token", JSON.stringify(token));

              this.$toast("注册成功！！！请点击登陆");
              var _this = this;
              setTimeout(() => {
                _this.$router.push("/login"); //这里要调到个人信息设置中
              }, 2000);
            } else {
              this.$toast("用户名已存在");
              //this.$router.push("/login");
              this.username = "";
              this.password = "";
            }
          })
          .catch(err => {
            console.log(err);
            this.$toast("服务器错误");
            this.username = "";
            this.password = "";
          });
      } else {
        this.$toast("请输入注册信息");
      }
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>