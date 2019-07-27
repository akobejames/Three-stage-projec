<!--
 * @Description: 
 * @Author: 付涵
 * @Date: 2019-07-26 09:14:51
 * @LastEditTime: 2019-07-26 10:07:46
 * @LastEditors: 张坤贺
 -->
<!-- 酒店详情页面 -->
<template>
  <div>
    <van-nav-bar title="维也纳酒店" left-text="返回" :fixed="true" style="font-size:12px" left-arrow @click-left="onClickLeft">
      <van-icon name="star-o" slot="right" />
    </van-nav-bar>

    <van-tabs class="fhnav" v-model="active" title-active-color="#f44" line-height="0" style="z-index:0" @click="onClick">
      <van-tab title="酒店预定">
        <van-image width="100%" height="200" contain src="http://s4.sinaimg.cn/mw690/0062gkYdzy6UMgtzgc3e3&690" />

        <!-- <div class="fhtitle">维也纳酒店（上海浦东机场）</div> -->
        <div class="fhtitle">{{detail.title}}</div>
        <p>浦东新区，维也纳酒店（上海浦东机场），近浦东机场，迪士尼</p>
        <p>2017年装修，多语言服务人员</p>
        <div class="fhinside" @click="pingjia()">用户评价</div>

        <div class="fhquan">消费一单可获得高级酒店30元代金券一张</div>

        <div class="fhlike">猜你喜欢</div>
        <div class="inner" v-for="(item, i) in list" :key="i">
          <van-image width="55" height="60" @click="fhbed(item.id)" :src="item.imgs" />

          <div class="fhtil">
            <div class="fhbed">{{item.name}}</div>
            <br />
            <p>不含早 大床 有窗</p>
            <br />
            <p>入住当天18点之前免费取消订单</p>
          </div>
          <div class="fhyuding" @click="fhbed(item.id)">
            <div>预定</div>
            <p>{{item.price}}在线支付</p>
          </div>
        </div>
        <!-- <div class="fhyu" @click="tap()">查看剩余14个房型</div> -->
        <div class="fhread">
          <div class="fhlike">入房必读</div>
          <div class="fhfirst">入离时间</div>
          <p>入店时间：14点以后 离店时间：12点之前</p>
          <div class="fhfirst">儿童政策</div>
          <p>不接受16岁以下儿童单独入住</p>
          <div class="fhfirst">膳食安排</div>
          <p>自助早餐，RMB18</p>
          <div class="fhfirst">宠物携带</div>
          <p>不允许携带宠物</p>
        </div>
      </van-tab>
      <van-tab title="用户评价"></van-tab>
      <van-tab title="其他酒店"></van-tab>
    </van-tabs>
  </div>
</template>

<script>
import axios from "axios";
import { Toast } from "vant";
export default {
  data() {
    return {
      active: 0,
      list: [],
      detail: {}
    };
  },
  mounted() {
    axios({
      url: "http://www.gethoteldetial/api"
      // params: {
      //     id: this.$route.query.id
      //   }
    }).then(data => {
      console.log(data);
      this.detail = data.data.hoteldetial;
      this.list = data.data.hoteldetial.conlist;

      console.log(this.list);
      console.log(this.detail);
    });
  },
  methods: {
    onClickLeft() {
      Toast({
        message: "返回",
        duration: 500
      });
      this.$router.go(-1);
    },
    tap() {
      this.num = 6;
    },
    onClick(name, title) {
      if (name == 1) {
        this.$router.push("/usercom");
      } else if (name == 2) {
        this.$router.push("/tripdal");
      }
    },
    pingjia() {
      this.$router.push("/usercom");
    },
    fhbed(id) {
      console.log(id);
      this.$router.push({ path: "/bed", query: { id: id } });
      window.scroll(0, 0);
    }
  }
};
</script>
<style scoped>
.fhnav {
  margin-top: 51px;
}
p {
  font-size: 10px;
  margin: 0;
  padding: 0;
}
.fhtitle {
  text-align: center;
}
.fhinside {
  width: 30px;
  height: 120px;
  position: fixed;
  right: 0;
  top: 225px;
  background-color: #bee6fd;
  text-align: center;
  line-height: 30px;
  writing-mode: tb-rl;
}
.fhquan {
  width: 100%;
  height: 20px;
  line-height: 20px;
  padding-left: 10px;
  font-size: 12px;
  background-color: #ccc;
}
.fhlike {
  width: 100%;
  height: 30px;
  font-size: 20px;
  margin: 10px 0;
}
.inner {
  display: flex;
  justify-content: space-around;
  margin-bottom: 5px;
}
.inner van-image {
  float: left;
}
.fhtil {
  width: 230px;
  height: 60px;
  float: right;
  /* position: relative;
    top:30px; */
}
.fhbed {
  display: inline;
}
.inner p {
  display: inline;
}
.fhyuding {
  width: 70px;
  height: 60px;
  float: right;
  background: #f44;
  text-align: center;
  border: 1px solid #f00;
  border-radius: 10px;
  margin-right: 5px;
}
.fhyuding div {
  height: 30px;
  line-height: 30px;
  font-size: 20px;
}
.fhyuding p {
  line-height: 15px;
}
/* .fhyu {
  width: 100%;
  height: 30px;
  text-align: center;
  line-height: 30px;
} */
.fhfirst {
  width: 100%;
  height: 20px;

  line-height: 20px;
}
.fhread {
  margin-left: 10px;
}
.fhread p {
  padding: 8px 0;
  font-size: 14px;
}
</style>