<!--
 * @Description: 
 * @Author: 李向阳·
 * @Date: 2019-07-18 19:25:20
 * @LastEditTime: 2019-07-19 20:41:21
 * @LastEditors: 李向阳
 -->
<template>
  <div>
      <van-nav-bar
  title="设置"
  left-arrow
  @click-left="onClickLeft"
/>

<van-cell title="账户" is-link @click="zh" />
<van-cell title="软件通知" is-link @click="rj" />
<van-cell title="给我们好评" is-link  />
<van-cell title="关于我们" is-link  @click="gy"/>
<van-cell title="退出登录" is-link  @click="my"/>
  </div>
</template>

<script>
export default {
  name: "Setting",
  data() {
    return {
        
    };
  },
  methods: {
      onClickLeft(){
           this.$router.go(-1)
      },
      zh(){
          this.$router.push('/Zhanghu')
      },
      rj(){
          this.$router.push('/Ruanjian') 
      },
      gy(){
        this.$router.push('/Guanyu') 
      },
      my(){
        this.$router.push('/Login') 
      }
  }
};
</script>

<style>
.van-cell{
    background: #ECECEC;
    margin-top: 15px;
}
.van-icon-arrow-left:before {
    color:#979797
}
</style>