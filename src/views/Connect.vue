<!--
 * @Description: 
 * @Author: 李向阳·
 * @Date: 2019-07-19 12:06:57
 * @LastEditTime: 2019-07-19 20:40:14
 * @LastEditors: 李向阳
 -->
<template>
<div>
 <van-nav-bar title="联系客服" left-arrow @click-left="onClickLeft" style="background:#cecece"/>


<van-panel title="在线客服（推荐）" desc="一触即达，分分钟解决您的疑问" ></van-panel>
<van-panel title="客服电话" desc="400-101-7980" ></van-panel>
<van-panel title="客服邮箱" desc="7781266@163.com" ></van-panel>
</div>
</template>

<script>
export default{
    name:"Connect",
    methods:{
        onClickLeft(){
            this.$router.go(-1)
        }
    }
}
</script>

<style>
.van-cell{
    font-size: 18px
}
.van-icon-arrow-left:before {
    color:#979797
}
</style>