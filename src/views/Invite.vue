<!--
 * @Description: 
 * @Author: 李向阳·
 * @Date: 2019-07-18 21:40:43
 * @LastEditTime: 2019-07-19 20:40:43
 * @LastEditors: 李向阳
 -->
<template>
  <div>
    <van-nav-bar title="邀请好友" left-arrow @click-left="onClickLeft" />
    <div style="position:relative">
        <img src="https://img.yzcdn.cn/vant/cat.jpeg" style="width:100%"/> 
        <p style="position:absolute;top:66%;left:30%;color:#f00">邀请您的好友注册</p> 
        <p style="position:absolute;top:80%;left:16%;color:#f00">注册成功后，双方均可获取200元好友优惠券</p>
    </div>
    <p style="text-align:center;margin-top:15px">分享链接</p>
    <div style="">
        <input type="text" style="margin-left:30px;margin-top:50px;float:left;width:60%;height:30px;border-right:none;line-height:30px;border:1px solid #cecece;overflow:hidden" value="https://youzan.github.io/vant/#/zh-CN/sku"/>
       <!--  <button style="width:20%;margin-top:50px;height:30px;text-align:center;background:#cecece;line-height:30px;float:left;border:1px solid #cecece;border-left:none">复制链接</button>   
     -->
  <button class="tag-read" data-clipboard-text="https://youzan.github.io/vant/#/zh-CN/sku" @click="copy" style="margin-top:50px;height:34px;border-left:none;line-height:30px;">复制链接</button>
 
     </div>
  </div>
</template>

<script>
import Clipboard from 'clipboard';
export default {
  name: "Invite",
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
   
copy() {
        var clipboard = new Clipboard('.tag-read')
        clipboard.on('success', e => {
          this.$toast('复制成功')
          // 释放内存
          clipboard.destroy()
        })
        clipboard.on('error', e => {
          // 不支持复制
          this.$toast('该浏览器不支持自动复制')
          // 释放内存
          clipboard.destroy()
        })
      }

  }
};
</script>

<style>
.van-nav-bar {
  background: #dededd;
}

.van-icon-arrow-left:before {
    color:#979797
}
</style>