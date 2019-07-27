<!--
 * @Description: 
 * @Author: 李向阳·
 * @Date: 2019-07-19 09:20:36
 * @LastEditTime: 2019-07-19 20:40:22
 * @LastEditors: 李向阳
 -->
<template>
  <div>
    <van-nav-bar title="关于我们" left-arrow @click-left="onClickLeft" style="background:#cecece"/>
    <P style="line-height:40px;margin-top:15px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;美团是中国领先的生活服务电子商务平台，我们的业务覆盖了超过200个品类和2800个城区县网络，在餐饮、外卖、酒店旅游、丽人、家庭、休闲娱乐等领域具有领先的市场地位。</P>
    <p style="line-height:40px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;人是美团最重要的资源。美团技术团队以浓厚的学习和分享氛围享誉业界：每天不止一场内部技术讲座与分享，还有荟萃业界专家的TopTalk，藏书近万的P2P图书馆，帮助同学拓展视野，追求卓越；每年定期举行的Hackathon、Ideathon和MDD Cup算法大赛，激发无限创意；当然还有业内已经有口皆碑的美团技术团队博客与微信公众号（meituantech），每月一次公开的技术沙龙，与同行切磋交流，不亦乐乎……</p>
    <p style="line-height:40px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;近年来，美团一直持续加大研发投入，根据公开信息，2018年第三季度，美团在科技研发的投入同比翻番，达到了20亿元。美团还在持续加强工程师特别是人工智能科学家队伍建设，大力建设能支持前台复杂业务的技术平台和业务中台，大力投入大数据、人工智能等技术，大力增强科技创新，为生活服务业高质量发展提供新动能，创造美好生活。</p>
    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;美团技术团队，欢迎更多优秀的技术人才加入！</p>
  </div>
</template>

<script>
export default {
  name: "Guanyu",
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  }
};
</script>

<style>
.van-icon-arrow-left:before {
    color:#979797
}
</style>