<!--
 * @Description: 
 * @Author: 李向阳·
 * @Date: 2019-07-20 17:34:26
 * @LastEditTime: 2019-07-20 17:48:51
 * @LastEditors: 李向阳
 -->
<template>
  <div>
    <van-nav-bar title="身份证号码" left-arrow @click-left="onClickLeft" style="background:#cecece" />
    <input
      type="text"
      v-model="cardnumber"
      style="width:70%;margin-top:50px;height:50px;margin-left:15%;border: 1px solid #666;"
    />
    <van-button type="info" size="large" style="margin-top:10px" @click="save">保存</van-button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Idcard",
  data() {
    return {
      cardnumber: ""
    };
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
    save() {
      if (this.cardnumber.length == 0) {
        this.$toast("请输入身份证");
      } else if (
        !/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(
          this.cardnumber
        )
      ) {
        this.$toast("身份证格式错误，请重新输入");
      } else {
        //this.$toast("格式正确");

        /* this.$router.push(path:"/PersonalInformation/:idcard"
        ) */
        this.$store.commit("msg1",this.cardnumber)
        this.$router.push({name:'PersonalInformation'})
        
        axios({  //没有数据接口
          url:
            "http://106.13.26.54:8080/PersonalCentre",
          params: { idCard: this.cardnumber }//缺少id
        }).then((data)=>{
            console.log(data.data.data)
        }) 
      }
    }
  }
};
</script>

<style>
.van-icon-arrow-left:before {
  color: #979797;
}
</style>