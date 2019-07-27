<!--
 * @Description: 
 * @Author: 付涵
 * @Date: 2019-07-26 09:09:31
 * @LastEditTime: 2019-07-26 09:56:47
 * @LastEditors: 付涵
 -->
<!-- 大床房详情页 -->
<template>
  <div>
    <van-nav-bar title="维也纳酒店（上海浦东机场）" left-text="返回" :fixed="true" left-arrow @click-left="onClickLeft">
      <van-icon name="star-o" slot="right" />
    </van-nav-bar>
    <div id="inner">
      <div style=" text-align: center">{{detail.name}}</div>
      <van-image width=100% height="200" contain src="http://img3.imgtn.bdimg.com/it/u=3219779382,2795945635&fm=26&gp=0.jpg" />
      <div class="fhtip">
        <p>面积：36平方米</p>
        <p>楼层：2-4层</p>
        <p>WIFI：免费WIFI</p>
      </div>
      <div class="fhtip">
        <p>早餐：无早餐</p>
        <p>窗户：有窗</p>
        <p>可住：两人</p>
      </div>
      <div class="fhhide" v-if="flag">
        <p>浴室配套 电吹风 24小时热水 洗漱用品</p>
      </div>

      <div style=" text-align: center" @click="fhif()">{{text?'查看更多房间设施':'收起'}}</div>
      <hr>
      <div class="fhtips">
        <p>房间数:</p><span>一间</span>
      </div>
      <div class="fhtips">
        <p>入住人:</p><span>{{this.$store.state.sname}}</span>
      </div>
      <div class="fhtips">
        <p>手机号:</p><span>15617175673</span>
      </div>
      <div class="fhtips">
        <p>预计到店时间:</p><span>16点（房间整晚保留）</span>
      </div>
      <div class="fhtips">
        <p>优惠:</p><span>最大优惠-20</span>
      </div>
      <div class="fhtips">
        <p>发票</p><span>如需发票请向前台索取</span>
      </div>
      <div class="fhtips">
        <p>预计到店时间:</p><span>16点（房间整晚保留）</span>
      </div>
      <van-goods-action>
        <van-goods-action-button type="warning" >
          <!-- :text="detail.price" --> {{detail.price}}</van-goods-action-button>
        <van-goods-action-button type="danger" text="立即购买" @click="onClickButton" />
      </van-goods-action>
      <!-- <van-submit-bar
        :price="3050"
        button-text="提交订单"
        @submit="onSubmit"
        /> -->
    </div>

  </div>
</template>

<script>
import { SubmitBar } from "vant";
import axios from "axios";
import { Toast } from "vant";
export default {
  data() {
    return {
      flag: false,
      text: true,
      detail: {},
      index: {}
    };
  },
  mounted() {
    var id = this.$route.query.id;
    axios({
      url: "http://www.gethoteldetial/api"
      // params: {
      //     id: this.$route.query.id
      //   }
    }).then(data => {
      console.log(data);
      this.detail = data.data.hoteldetial.conlist[id];
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
    // onSubmit(){
    //      this.$router.push("/order")
    // }
    onClickButton() {
      Toast({
        message: "提交订单",
        duration: 500
      });
      this.$router.push({ path: "/orderdetial", query: this.detail });

      // this.$router.push('/orderdetial')
    },
    fhif() {
      this.flag = this.flag ? false : true;
      this.text = !this.text;
    }
  }
};
</script>
<style scoped>
#inner {
  margin-top: 46px;
  margin-bottom: 51px;
}
.fhtip {
  width: 50%;
  height: 100px;
  float: left;
}
.fhtip p {
  font-size: 14px;
  margin: 10px 10px 0;
}
.fhtips {
  height: 50px;

  line-height: 50px;
}
.fhtips p {
  width: 120px;
  float: left;
  height: 30px;
  margin: 0 0 0 20px;
  font-weight: 900;
}
.fhtips span {
  width: 180px;
  float: left;
  height: 30px;
}
.fhhide {
  margin-left: 10px;
}
</style>