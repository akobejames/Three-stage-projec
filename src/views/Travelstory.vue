<!--
 * @Description: 
 * @Author: 陈佳
 * @Date: 2019-07-18 10:57:32
 * @LastEditTime: 2019-07-25 22:24:53
 * @LastEditors: 张坤贺

 -->
<template>
  <div style="position: relative;">
    <van-nav-bar fixed:true left-arrow @click-left="onClickLeft" />
    <ul class="travellist">
      <li v-for="(item,i) in list">
        <!-- 加载的数据 -->
        <van-image fit="contain" :src="item.img" v-tap="{methods:todetial,id:item.id}" />
        <!-- <van-image fit="contain" :src="item.imgs" v-tap="{methods:todetial,pid:item.pid}" /> -->
        <p style="text-align:center">{{item.addressinfo}}</p>
        <p>{{item.info}}</p>
        <!-- 评分 -->
        <van-rate v-model="item.id" :size="18" color="#f44" void-icon="star" void-color="#eee" />
        <!-- 收藏爱心 -->
        <van-row style="margin:10px 0">
          <van-col span="4">
            <van-icon size="20px" color="black" name="manager" v-tap.stop="{methods:userinfo,id:userid}" />
          </van-col>
          <van-col span="10" offset="10" style="display: flex;justify-content: space-around;">
            <van-icon size="20px" color="black" name="thumb-circle-o" v-tap.stop="{methods:dianzan,id:item.id}" />
            <van-icon size="20px" color="#f44" v-if="item.sc=='1'" name="like" v-tap="{methods:qxsc,i:i}" />
            <van-icon size="20px" color="black" v-else name="like" v-tap="{methods:sc,i:i}" />

            <van-icon size="20px" color="black" name="chat" v-tap="{methods:chat,id:item.id}" />
          </van-col>
        </van-row>
      </li>
    </ul>
    <!-- 底部 -->
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
import axios from "axios";
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "Travelstory",
  data() {
    return {
      msg: "Food页面",
      list: [],
      active: 0,
      userid: ""
    };
  },

  created() {
    this.userid = this.$store.state.userid;
    axios({
      url: "http://106.13.26.54:8080/travelStory"
    }).then(data => {
      this.list = data.data;
      console.log(data.data);
    });
  },
  methods: {
    //返回上一页
    onClickLeft() {
      this.$router.go(-1);
    },
    //跳转到详情页
    todetial(a) {
      this.$router.push({ name: "Travelstorydetial", query: { id: a.id } });
    },
    fdinfo(a) {
      //跳转到房东页
    },
    dianzan(a) {
      //点赞
      console.log("dainzan");
    },
    // 收藏 该功能应该写个接口  需要修改数据的
    sc(a) {
      //
      var id = this.userid;
      if (id == "") {
        this.$toast("您还未登录，不能点击收藏");
      } else {
        axios({
          url: "http://106.13.26.54:8080/userTraverStorySc",
          params: {
            travelstoryId: a.i,
            userId: id
          }
        }).then(data => {
          if (data.data.code == 1) {
            this.list[a.i].sc = true;
          } else {
            this.$toast("收藏失败");
          }
        });
      }
    },
    //取消收藏
    qxsc(a) {
      console.log(a);
      var id = this.userid;
      if (id == "") {
        this.$toast("您还未登录，不能点击取消收藏");
      } else {
        this.list[a.i].sc = false;
      }
    },
    chat(i) {
      //跳转到评论页面
      // console.log("chat");
      this.$router.push("/comments");
    },
    userinfo(i) {
      this.$router.push("/myself");
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.travellist {
  margin-bottom: 50px;
  overflow: hidden;
  display: flex;
  flex: 1;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
}
.travellist li {
  width: 48%;
  font-size: 12px;
  color: #cecece;
  position: relative;
}
p {
  margin: 0;
  padding: 0;
}
.sc {
  position: absolute;
  right: 10px;
  top: 10px;
}
</style>
