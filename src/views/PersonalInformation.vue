<!--
 * @Description: 
 * @Author: 李向阳·
 * @Date: 2019-07-18 15:43:47
 * @LastEditTime: 2019-07-20 20:17:13
 * @LastEditors: 李向阳
 -->
<template>
  <div>
<!-- 
    <p>{{this.$route.params.idcard}}</p> -->
    <van-nav-bar title="个人资料" left-arrow @click-left="onClickLeft" style="background:#cecece" />
    <van-row style="padding-top:30px;height:180px;background:#cecece">
      <van-col span="8"></van-col>
      <van-col span="8">
        <img :src="imgstr" style="width:140px;height:140px; border-radius:50%" />
        <p style="margin:0 auto;text-align:center" @click="showPopup">修改头像</p>
      </van-col>
      <van-col span="8"></van-col>
    </van-row>

    <van-popup v-model="show" style="height:420px;width:90%">
      <van-row style="height:200px;">
        <van-col span="8"></van-col>
        <van-col span="8">
          <p style="text-align: center;margin-top:20px">修改头像</p>
          <van-uploader
            capture="camera"
            v-model="fileList"
            :after-read="afterRead"
            multiple
            :max-count="1"
            style="width:100px;height:100px; border-radius:50%;margin-top:30px"
          />
          <!-- <img src=""  style="width:100px;height:100px; border-radius:50%;background:red;margin-top:30px"/> -->
        </van-col>
        <van-col span="8"></van-col>
      </van-row>
      <p style="text-align: center">请务必上传您本人真实头像</p>
      <van-cell value="拍照" size="large" />
      <van-cell value="从相册中选择" size="large" />
      <van-cell value="确定" size="large" @click="fade" />
    </van-popup>

    <van-cell title="昵称" is-link :value="this.$store.state.sname" />
    <van-cell title="性别" is-link :value="radio" @click="showPopup1" />
    <van-cell title="出生日期" is-link :value="val" @click="selectData" />
    <van-cell title="身份证号码" is-link :value='$store.state.idcard' to="/idcard" />
    <van-cell title="邮箱地址" is-link :value='$store.state.email' to="/tjemail" />

    <van-popup
      v-model="show0"
      style="height:80px;width:60%;display:flex;justify-content:space-around;align-items:center"
    >
        <van-radio-group v-model="radio">
            <van-radio name="男">男</van-radio>
            <van-radio name="女">女</van-radio>
        </van-radio-group>
    </van-popup>

    <!-- 日期选择 -->
    <van-popup v-model="show1" style="width:80%">
      <van-datetime-picker
        @change="change"
        @confirm="confirm"
        @cancel="cancel"
        v-model="currentDate"
        type="date"
      />
    </van-popup>
  </div>
</template>

<script>
export default {
  name: "PersonalInformation",
  data() {
    return {
      radio: '男',
      fileList: [],
      show: false,
      show0: false,
      show1: false,
      val: "2018-09-09",
      sex: "",
      currentDate: new Date(),
      imgstr: require("../assets/logo.png")
    };
  },
  
  methods: {
   
    onClickLeft() {
      this.$router.go(-1);
    },
    showPopup() {
      this.show = true;
    },
    showPopup1() {
      this.show0 = true;
    },
    fade() {
      this.show = false;
      console.log(this.$store.state.sname);
    },
    selectData() {
      this.show1 = true;
    },
    cancel() {
      this.show1 = false;
    },
    change(e) {
      let xx = e.getValues();
      this.val = xx.join("-");
    },

    confirm() {
      /* console.log(String(e).split(" ")) */
      this.show1 = false;
      console.log(this.imgstr)
     
    },
    afterRead(file) {
      // 此时可以自行将文件上传至服务器
     // console.log(file);
      let _this = this;
      var reader = new FileReader();
      reader.readAsDataURL(file.file); // 读出 base64
      reader.onloadend = function() {
        // 图片的 base64 格式, 可以直接当成 img 的 src 属性值
        var dataURL = reader.result;
        console.log(dataURL);
        _this.imgstr = dataURL;
         _this.$store.commit("msg4",_this.imgstr)
      };
    }
  }
};
</script>

<style>
.van-cell__value--alone {
  color: #323233;
  text-align: center;
}
.van-icon-arrow-left:before {
  color: #979797;
}
</style>