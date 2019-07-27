<!--
 * @Description: 
 * @Author: 李向阳·
 * @Date: 2019-07-19 11:38:06
 * @LastEditTime: 2019-07-19 20:41:28
 * @LastEditors: 李向阳
 -->
<template>
<div>
 <van-nav-bar title="会员权益" left-arrow @click-left="onClickLeft" style="background:#cecece"/>
 <img src="../assets/vip.jpg" style="width:100%;height:200px"/>
 <h1 style="margin:20px;auto;text-align:center;height:40px;font-size:22px;line-height:40px;color:#cecece">会员权益</h1>
<van-panel title="普通会员" desc="可享受签到积分每月1次五倍积分奖励" ></van-panel>
<van-panel title="白银会员" desc="可享受签到积分每月2次五倍积分奖励" ></van-panel>
<van-panel title="黄金会员" desc="可享受签到积分每月3次五倍积分奖励" ></van-panel>
<van-panel title="钻石会员" desc="可享受签到积分每月4次五倍积分奖励" ></van-panel>
</div>
</template>

<script>
export default{
    name:"Vipmember",
    methods:{
       onClickLeft(){
           this.$router.go(-1)
       }
    }
}
</script>

<style>
.van-icon-arrow-left:before {
    color:#979797
}
</style>