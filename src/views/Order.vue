<!--
 * @Description: 
 * @Author: 陈佳
 * @Date: 2019-07-19 15:15:24
 * @LastEditTime: 2019-07-24 11:29:10
 * @LastEditors: 陈佳
 -->

<template>
  <div class="box">
    <van-nav-bar
      fixed:true
      left-arrow
      @click-left="onClickLeft"
      title="支付订单"
      style="background:#DBDBDB"
    />
    <div class="info">
      <p>价格：￥{{detial.price}}元</p>
      <p>订单信息：{{detial.ordernum}}</p>
      <p>其他：{{detial.beizhu}}</p>
    </div>
    <van-radio-group v-model="radio">
      <van-cell-group>
        <div></div>
        <van-cell title="支付宝支付" clickable @click="radio = '1'">
          <van-radio slot="right-icon" name="1" />
        </van-cell>
        <van-cell title="微信支付" clickable @click="radio = '2'">
          <van-radio slot="right-icon" name="2" />
        </van-cell>
        <van-cell title="Apple pay支付" clickable @click="radio = '3'">
          <van-radio slot="right-icon" name="3" />
        </van-cell>
      </van-cell-group>
    </van-radio-group>
    <van-row>
      <van-col span="8" offset="8">
        <van-button type="primary" style="border-radius:10px" @click="qrzf">确认支付</van-button>
      </van-col>
    </van-row>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Order",
  data() {
    return {
      detial: {},
      radio: "1"
    };
  },
  methods: {
    //返回上一页
    onClickLeft() {
      this.$router.go(-1);
    },
    qrzf() {
      this.$router.push({path:"/orderok",query:this.detial});
    }
  },
  mounted() {
    console.log(this.$route.query);
    this.detial = this.$route.query;
    // axios({//请求订单信息
    //   url: "http://www.getfooddetial/api"
    // }).then(data => {
    //   this.detial = data.data.fooddetial;
    //   console.log(this.detial);
    // });
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.box {
  height: 600px;
  position: relative;
}
.info {
  left: 0px;
  top: 60px;
  width: 414px;
  height: 210px;
padding-left:20px;
  line-height: 20px;
  background-color: rgba(244, 244, 244, 1);
  /* text-align: center; */
  border: 1px solid rgba(255, 255, 255, 0);
}
</style>