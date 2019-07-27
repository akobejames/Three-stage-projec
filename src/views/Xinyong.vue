<!--
 * @Description: 
 * @Author: 李向阳·
 * @Date: 2019-07-19 09:34:19
 * @LastEditTime: 2019-07-19 20:41:36
 * @LastEditors: 李向阳
 -->
<template>
<div>
 <van-nav-bar title="芝麻信用免押声明" left-arrow @click-left="onClickLeft" style="background:#cecece"/>
 <img src="../assets/zmxy.jpg" style="width:100%;height:200px"/>
 <p style="line-height:40px ">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;芝麻信用分是芝麻信用对海量信息数据的综合处理和评估，主要包含了用户信用历史、行为偏好、履约能力、身份特质、人脉关系五个维度。芝麻信用基于阿里巴巴的电商交易数据和蚂蚁金服的互联网金融数据，并与公安网等公共机构以及合作伙伴建立数据合作，与传统征信数据不同，芝麻信用数据涵盖了信用卡还款、网购、转账、理财、水电煤缴费、租房信息、住址搬迁历史、社交关系等等。</p>
 <hr>
 <p style="line-height:40px;margin-top:15px">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;根据用户的芝麻信用分的高低，分了5个等级，不同的等级反映了用户的信用情况，具体如下:</p>
 <p style="line-height:40px ">最高等级：750~950分，信用极好，占比20%左右，属于支付宝的优质用户;</p>
 <p style="line-height:40px ">第二等级：700~750分，信用优秀，占比30%左右，活跃度高，很守信用;</p>
 <p style="line-height:40px ">第三等级：650~700分，信用良好，占比25%左右，较活跃，履约能力好;</p>
 <p style="line-height:40px ">第四等级：550~650分，信用中等，占比20%左右，有几次不良行为;</p>
 <p style="line-height:40px ">第五等级：350~550分，信用较差，占比5%左右，属于“老赖”级别。</p>
 <hr>
 <p style="margin:15px 0">免押流程说明</p>
 <img src="../assets/zmmy.jpg" style="width:100%;height:160px"/>
</div>
</template>

<script>
export default{
    name:"Xinyong",
    methods: {
        onClickLeft() {
            this.$router.go(-1);
    }
    },
}
</script>

<style>
.van-icon-arrow-left:before {
    color:#979797
}
</style>