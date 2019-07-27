<!--
 * @Description: 
 * @Author: 陈佳
 * @Date: 2019-07-20 15:30:36
 * @LastEditTime: 2019-07-24 11:54:54
 * @LastEditors: 陈佳
 -->


<template>
  <div class="box">
    <van-nav-bar
      fixed:true
      left-arrow
      @click-left="onClickLeft"
      title="费用明细"
      style="background:#DBDBDB"
    />
    <van-row>
      <van-col span="22" offset="1">
        <div
          style="background:#E8E8E8;height:170px;margin-

top:10px;padding:10px;border-radius: 10px"
        >
         <p>预订信息：</p>
          <p>入住人：{{detial.name}}</p>
          <p>联系方式：{{detial.phonenum}}</p>
          <p>价格：￥{{detial.price}}元</p>
          <p>订单信息：{{detial.ordernum}}</p>
          <p>其他：{{detial.beizhu}}</p>
        </div>
      </van-col>
    </van-row>
     <van-row>
      <van-col span="22" offset="1">
        <van-row style="margin-top:10px">
          <van-col span="8">订单金额：</van-col>
          <van-col span="4" offset="10">{{detial.price}}元</van-col>
        </van-row>
        <van-row style="margin-top:10px">
          <van-col span="8">优惠总金额：</van-col>
          <van-col span="4" offset="10">-20</van-col>
        </van-row>
        <van-row style="margin-top:10px">
          <van-col span="8">订单支付总金额：</van-col>
          <van-col span="4" offset="10" >{{detial.price-20}}元</van-col>
        </van-row>
        <van-row style="margin-top:10px">
          <van-col span="8">退款总金额：</van-col>
          <van-col span="4" offset="10">0元</van-col>
        </van-row>
      </van-col>
    </van-row>
    <van-row style="margin-top:30px">
      <van-col span="10" offset="8">
        <van-button
          type="primary"
          style="border-radius:30px;height:30px;line-height:30px;"
          @click="toindex"
        >查看首页</van-button>
      </van-col>
    </van-row>
    
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Feiyongmingxi",
  data() {
    return {
      value: "",
      showKeyboard: false,
      detial:{},
      
    };
  },
  methods: {
    //返回上一页
    onClickLeft() {
      this.$router.go(-1);
    },
    toindex() {
      this.$router.push("/index");
    },
  },
  mounted() {
    this.detial=this.$route.query
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
.van-nav-bar__text {
  color: black;
}
p {
  font-size: 12px;
}
</style>