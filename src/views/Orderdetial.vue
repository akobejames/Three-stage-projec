<!--
 * @Description: 
 * @Author: 陈佳
 * @Date: 2019-07-23 09:05:25
 * @LastEditTime: 2019-07-24 15:14:02
 * @LastEditors: 陈佳
 -->


<template>
  <div class="box">
    <van-nav-bar
      fixed:true
      left-arrow
      @click-left="onClickLeft"
      title="订单详情"
      style="background:#DBDBDB"
    />
    <van-row>
      <van-col span="22" offset="1">
        <div style="background:#E8E8E8;height:170px;margin-top:10px;padding:10px;border-radius: 10px">
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
      <van-col span="8" offset="8" style="margin-top:20px">
        <van-button type="primary" style="border-radius:10px" @click="tjdd">提交订单</van-button>
      </van-col>
    </van-row>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Orderdetial",
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
    tjdd(){
    this.$router.push({path:"/order",query:this.detial})
    }
  },
  mounted() {
    var price=this.$route.query.price
   // var price=this.
    axios({//请求订单信息
      url: "http://www.getorderdetial/api"
    }).then(data => {
      this.detial = data.data.orderdetial;
      this.detial.price=price
      this.detial.name=this.$store.state.sname
      console.log(data.data.orderdetial);
    });
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
p{
  font-size:12px;
}
</style>