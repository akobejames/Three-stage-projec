
<!--
 * @Description: 
 * @Author: 李向阳·
 * @Date: 2019-07-19 08:42:39
 * @LastEditTime: 2019-07-24 10:47:33
 * @LastEditors: 陈佳
 -->
<template>
  <div>
    <van-nav-bar title="我的优惠券" left-arrow @click-left="onClickLeft" style="background:#cecece" />
    <!-- 优惠券单元格 -->
    <van-coupon-cell :coupons="coupons" :chosen-coupon="chosenCoupon" @click="showList = true" />

    <!-- 优惠券列表 -->
    <van-popup v-model="showList" position="bottom">
      <van-coupon-list
        :coupons="coupons"
        :chosen-coupon="chosenCoupon"
        :disabled-coupons="disabledCoupons"
        @change="onChange"
        @exchange="onExchange"
      />
    </van-popup>
  </div>
</template>

<script>
const coupon = {
  available: 1,
  condition: "无使用门槛\n最多优惠12元",
  reason: "",
  value: 150,
  name: "优惠券名称",
  startAt: 1489104000,
  endAt: 1514592000,
  valueDesc: "1.5",
  unitDesc: "元"
};
export default {
  name: "Youhui",
  data() {
    return {
      chosenCoupon: -1,
      coupons: [coupon],
      disabledCoupons: [coupon],
      showList:false
    };
  },
  methods: {
    onChange(index) {
      this.showList = false;
      this.chosenCoupon = index;
    },
    onExchange(code) {
      this.coupons.push(coupon);
    },
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style>
.van-icon-arrow-left:before {
  color: #979797;
}
</style>
