<template>
  <div>
    <van-nav-bar title="浏览收藏" left-arrow @click-left="onClickLeft" style="background:#cecece" />

    <div v-for="(item, index) in data" :key="index" >
        <img :src="data.img" style="width:100%;"/>
      <div style="height:30px;font-size:20px;line-height:30px">
        <span>{{data.addressinfo}}</span>
        <span>{{data.traveladdress}}</span>
      </div>
      <p style="font-size:18px">{{data.info}}</p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Look",
  data(){
      return{
          data:''
      }
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1);
    }
  },
  mounted() {
    axios({
      url: "http://106.13.26.54:8080/selectUserSc",
      params: { userId: 1 }
    }).then(data => {
     /*  console.log(data.data.travelstoryList[0].img);
      this.src=data.data.travelstoryList[0].img */
      this.data=data.data.travelstoryList[1]
    });
  }
};
</script>

<style>
.van-icon-arrow-left:before {
  color: #979797;
}
</style>