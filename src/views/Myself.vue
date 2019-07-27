<!--
 * @Description: 
 * @Author: 李向阳·
 * @Date: 2019-07-19 22:11:18
 * @LastEditTime: 2019-07-26 09:38:29
 * @LastEditors: 张坤贺
 -->

 
 

<template>
  <div>
    <div class="set" style="position:relative">
      <van-icon name="setting" :size="24" @click="set" />
      <span>设置</span>
      <van-icon name="sign" :size="24" style="margin-left:15px" />
      <span @click="showPopup">签到</span>

      <div v-if="this.$store.state.sname">
        <h2 style="margin-top:35px">{{this.$store.state.sname}}</h2>
        <van-icon name="vip-card" :size="24" style="margin-top:20px" />
        <span @click="vip" style="margin-top:5px">高级会员</span>
        <img class="photo" :src="$store.state.imgstr" style="width:110px;height:110px; border-radius:50%" @click="test" />
      </div>

      <div style="left: 131px;
        position:absolute;
        top: 90px;
        left:90px;
        width: 151px;
        height: 50px;
        line-height: 50px;
        border-radius: 50px;
        background-color: rgba(255, 255, 255, 0);
        text-align: center;
        border: 2px solid rgba(255, 255, 255, 1);
        color:#fff;
        border-radius:50px;" v-else @click="tologin">登录/注册</div>
    </div>

    <van-grid :column-num="3" :gutter="5" :border="false">
      <van-grid-item v-for="(item,i) in list1" :key="i" icon="gem-o" :text="item.text" v-tap="{methods:tap1,i:i}" />
    </van-grid>

    <van-popup v-model="show" style="width:80%;height:278px;text-align:center">
      <p style="height:22px;line-height:22px;margin-top:50px;font-size:16px">感谢您，签到成功！</p>
      <div style="width:100px;height:100px;border:1px solid #cecece;border-radius:50%;background:#BFBFBF;margin-left:100px;margin-top:20px">
        <p style="height:50px;line-height:50px;font-size:36px;margin-top:10px;margin-bottom:0;text-align:center">积分</p>
        <p style="height:40px;line-height:40px;font-size:28px;margin-top:0;text-align:center">+2</p>
      </div>
      <p style="height:20px;line-height:20px;font-size:14px;margin-top:45px;padding-top:10px;border-top:1px solid #cecece" @click="disapp">知道啦！</p>
    </van-popup>

    <img src="http://img5.imgtn.bdimg.com/it/u=1829336786,1675610601&fm=26&gp=0.jpg" style="height:150px;width:100%;" />

    <van-grid :column-num="3" :gutter="4" :border="false" style="margin-bottom:50px">
      <van-grid-item v-for="(item,i) in list2" :key="i" icon="flower-o" :text="item.text" v-tap="{methods:tap2,i:i}" />
    </van-grid>
    <!-- 底部标签栏 -->
    <van-tabbar v-model="active" id="zkh-footer">
      <van-tabbar-item icon="home-o" to="/index">推荐</van-tabbar-item>
      <van-tabbar-item icon="search" to="find">发现</van-tabbar-item>
      <van-tabbar-item icon="description" to="order">订单</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="myself">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "Myself",
  data() {
    return {
      show: false,
      active: "0",
      list1: [
        {
          text: "邀请好友",
          path: "/invite"
        },
        {
          text: "优惠券",
          path: "/youhui"
        },
        {
          text: "积分",
          path: ""
        },
        {
          text: "浏览收藏",
          path: "/look"
        },
        {
          text: "芝麻信用",
          path: "/xinyong", 
        },
        {
          text: "我的故事",
          path: ""
        },
        {
          text: "开具发票",
          path: ""
        },
        {
          text: "收件地址",
          path: "/address"
        },
        {
          text: "金卡会员",
          path: "/huiyuan"
        }
      ],
      list2: [
        {
          text: "联系客服",
          path: "/connect"
        },
        {
          text: "成为房东",
          path: ""
        },
        {
          text: "我的入住人",
          path: ""
        },
        {
          text: "意见反馈",
          path: "/suggestion"
        }
      ]
    };
  },
  methods: {
    test() {
      this.$router.push("/PersonalInformation");
    },
    set() {
      this.$router.push("/Setting");
    },
    vip() {
      this.$router.push("/Vipmember");
    },
    showPopup() {
      this.show = true;
    },
    disapp() {
      this.show = false;
    },

    tap1(a) {
      // console.log(a)
      // console.log(this.list1[a.i].path)
      this.$router.push(this.list1[a.i].path);
    },
    tap2(a) {
      this.$router.push(this.list2[a.i].path);
    },
    tologin() {
      this.$router.push("/Login");
    }
  },
  beforeRouteLeave(to, from, next) {
    console.log(this);
    var a = this.$store.state.sname;
    if (
      to.path == "/Login" ||
      to.path == "/index" ||
      to.path == "/travel" ||
      to.path == "/order"
    ) {
      next(true);
    } else {
      if (a !== "") {
        next();
      } else {
        next(false);
      }
    }
  }
};
</script>

<style>
.set {
  height: 180px;
  background: #cecece;
  padding-top: 30px;
  padding-left: 20px;
}
.set span {
  height: 24px;
  line-height: 24px !important;
  margin-left: 5px;
}
.van-icon van-icon-setting {
  margin: 0 10px;
}
.photo {
  position: absolute;
 
  display: block;
  top: 70px;
  right: 20px;
}
</style>