<!--
 * @Description: 
 * @Author: 李向阳·
 * @Date: 2019-07-19 10:09:07
 * @LastEditTime: 2019-07-19 20:40:06
 * @LastEditors: 李向阳
 -->
<template>
<div>
<van-nav-bar title="收件地址" left-arrow @click-left="onClickLeft" style="background:#cecece"/>
<div style="width:80%;height:30px;line-height:30px;text-align:center;margin:10px auto;background:#cecece" @click="plus">+添加</div>
<div style="margin-top:30px;height:100px;border-top:1px solid #cecece;border-bottom:1px solid #cecece">
    <span>张三</span><span>1345665212</span>
    <p>地址</p>
    <p>编辑</p>
</div>
</div>
</template>

<script>
export default{
    name:"Address",
    methods:{
        onClickLeft(){
            this.$router.go(-1)
        },
        plus(){
             this.$router.push('/plus')
        }
    }
}
</script>

<style>
.van-icon-arrow-left:before {
    color:#979797
}
</style>