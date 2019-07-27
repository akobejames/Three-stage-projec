<!--
 * @Description: 
 * @Author: 陈佳
 * @Date: 2019-07-19 15:15:24
 * @LastEditTime: 2019-07-24 14:12:41
 * @LastEditors: 陈佳
 -->

<template>
  <div class="box">
    <van-nav-bar
      fixed:true
      left-arrow
      @click-left="onClickLeft"
      title="预订成功"
      style="background:#DBDBDB"
    />
    <van-row style="margin-top:10px">
      <van-col span="8">
        <van-steps :active="active" direction="vertical" style="font-size:15px">
          <van-step style="height:70px;">提交订单</van-step>
          <van-step style="height:70px;">酒店确认</van-step>
          <van-step style="height:70px;">入住</van-step>
        </van-steps>
      </van-col>
      <van-col span="15">
        <div
          style="background:#E8E8E8;height:220px;padding:10px;border-radius: 10px"
        >
          <h3>温馨提示</h3>
          <p>{{ detial.beizhu }}</p>
        </div>
      </van-col>
    </van-row>
    <van-row>
      <van-col span="22" offset="1">
        <div style="background:#E8E8E8;height:170px;border-radius: 10px">
          <van-nav-bar
            :left-text="'在线支付' + detial.price + '元'"
            right-text="费用明细"
            style="background:#E8E8E8;border-bottom:1px solid black;margin:0 5px;"
            color="pink"
            @click-right="onClickRight"
          />
          <p>
            <van-tag round>申请退款</van-tag>
            <van-tag round type="danger">一键入住</van-tag>
            <van-tag round type="primary">查看地图</van-tag>
            <van-tag round type="success">查看房型</van-tag>
          </p>
          <p>地址：{{ detial.address }}</p>
        </div>
      </van-col>
    </van-row>
    <van-row>
      <van-col span="22" offset="1">
        <div
          style="background:#E8E8E8;height:170px;margin-top:10px;padding:10px;border-radius: 10px"
        >
          <p>预订信息：</p>
          <p>入住人：{{ detial.name }}</p>
          <p>联系方式：{{ detial.phonenum }}</p>
          <p>价格：￥{{ detial.price }}元</p>
          <p>订单信息：{{ detial.ordernum }}</p>
          <p>其他：{{ detial.beizhu }}</p>
        </div>
      </van-col>
    </van-row>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Orderok",
  data() {
    return {
      detial: {},
      active: 1
    };
  },
  methods: {
    //返回上一页
    onClickLeft() {
      this.$router.go(-1);
    },
    onClickRight() {
      console.log("aaa");
      this.$router.push({ path: "/feiyongmingxi", query: this.detial });
    }
  },
  mounted() {
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
  width: 90%;
  height: 210px;
  line-height: 20px;
  background-color: rgba(244, 244, 244, 1);
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0);
}

.van-nav-bar__text {
  color: black;
}
p {
  font-size: 12px;
}
</style>