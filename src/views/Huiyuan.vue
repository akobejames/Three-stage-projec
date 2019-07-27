<!--
 * @Description: 
 * @Author: 李向阳·
 * @Date: 2019-07-19 14:26:29
 * @LastEditTime: 2019-07-20 14:58:02
 * @LastEditors: 李向阳
 -->
<template>
<div>
<van-nav-bar title="金卡会员" left-arrow @click-left="onClickLeft" style="background:#cecece"/>

<van-row style="padding-top:30px;height:180px;background:#cecece">
  <van-col span="8"></van-col>
  <van-col span="8"><img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2216561550,1327967161&fm=26&gp=0.jpg" style="width:140px;height:140px; border-radius:50%"/><p style="margin:0 auto;text-align:center">{{$store.state.sname}}</p></van-col>
  <van-col span="8"></van-col>
</van-row>

<div style="margin:20px 8px;display:flex;color:#979797;"><span style="display:block;width:20px;height:20px;margin-right:20px;text-align:center;border:1px solid #000;border-radius:50%">折</span><span>金卡会员全年订房享9折优惠</span></div>
<div style="margin:20px 8px;display:flex;color:#979797;padding-bottom:30px;border-bottom:1px solid #cecece"><span style="display:block;width:20px;height:20px;margin-right:20px;border:1px solid #000;border-radius:50%"></span><span>更多优惠特权敬请期待</span></div>
<div class="tiaokuan">
    <p>会员卡使用条款</p>
    <p>1、持卡可以享受会员的尊贵服务，消费时请主动出示此卡。</p>
    <p>2、此卡为储值/积分卡，请妥善保管，若有遗失请及时到本店挂失补办。</p>
    <p>3、此卡一经办理非店方原因，不找零、不提现、不退换。</p>
    <p>4、此卡的最终解释权归本店所有。</p>
    <p>5、此卡在本公司旗下所有连锁店内可以通用。</p>
</div>
<div style="height:60px;line-height:60px;text-align:center;color:#979797;font-size:22px;background:#cedede;width:100%" >开启特权</div>
</div>
</template>

<script>
export default{
    name:"Huiyuan",
    methods:{
       onClickLeft(){
           this.$router.go(-1)
       },
    }
}
</script>

<style>
.tiaokuan p{
    line-height: 28px;
    color:#979797;
}
.van-icon-arrow-left:before {
    color:#979797
}
</style>