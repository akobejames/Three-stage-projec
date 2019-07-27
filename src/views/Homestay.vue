<template>
  <div>
    <van-nav-bar title="房源搜索" left-arrow @click-left="onClickLeft" class="zkh-nav" />
    <div id="zkh-inner">
      <van-tabs v-model="active" line-height="0" title-active-color="#F00" @click="onClick">

        <van-tab title="民宿">
          <div class="zkh-city">
            <i>请选择城市</i>
            <van-cell :title="city" is-link v-tap={methods:ulshow} v-if="arrows" style="margin:0;background-color:#fff" />
            <van-cell :title="city" is-link v-tap={methods:ulshow} arrow-direction="down" v-else style="margin:0;background-color:#fff" />
          </div>

          <div class="zkh-times ">
            <div class="block">
              <div class="demonstration">入住时间</div>

              <el-date-picker v-model="value1" type="date" placeholder="选择日期" format="M月d日" @change="getWeekin">
              </el-date-picker>

              <span class="zkh-week">{{inweek}}</span>
            </div>

            <div class="block">
              <div class="demonstration">离开时间</div>
              <el-date-picker v-model="value2 " type="date" placeholder="选择日期" format="M月d日" @change="getWeekout">
              </el-date-picker>
              <span class="zkh-week">{{outweek}}</span>
            </div>
          </div>
        </van-tab>
        <van-tab title="酒店">
        </van-tab>
        <van-tab title="短租">
        </van-tab>
      </van-tabs>

      <van-cell-group class="zkh-search">
        <van-field v-model="value" placeholder="搜索酒店/地名/关键词" style="margin:0;background-color:#fff" :border="false" />
        <van-icon name="arrow" v-tap={methods:downshow} />
      </van-cell-group>

      <ul v-show="show" class="zkh-cityul">
        <li v-for="(item, index) in list" :key="index" class="zkh-li" @click="selectCity(index)" onMouseOver="this.style.backgroundColor='#FF0000'" onMouseOut="this.style.backgroundColor='#FFFFFF'">{{ item.address }}</li>
      </ul>

      <div class="zkh-button">
        <van-button type="primary" class="zkh-btnhomestay" @click="btn">开始查找</van-button>
      </div>
    </div>

  </div>
</template>

<script>
import { Toast } from "vant";
import axios from "axios";
export default {
  name: "Homestay",
  props: [""],
  data() {
    return {
      active: 0,
      city: "",
      show: false,
      arrows: true,
      list: [],
      value: "",
      value1: "",
      value2: "",
      inweek: "",
      outweek: ""
    };
  },
  beforeCreate() {
    axios({
      url: "http://106.13.26.54:8080/selectHomestayAll"
    }).then(data => {
      this.list = data.data;
      this.city = data.data[0].address;
    });
  },
  mounted() {
    // axios.get("/static/indexdata.json").then(data => {
    //   this.list = data.data.list;
    //   this.city = data.data.list[0].address;
    // });
  },
  methods: {
    onClickLeft() {
      this.$router.push("/index");
    },
    getTime(time) {
      var dt = new Date(time);
      var ds = dt.getDay();
      if (ds === 0) {
        ds = "周日";
      } else if (ds === 1) {
        ds = "周一";
      } else if (ds === 2) {
        ds = "周二";
      } else if (ds === 3) {
        ds = "周三";
      } else if (ds === 4) {
        ds = "周四";
      } else if (ds === 5) {
        ds = "周五";
      } else if (ds === 6) {
        ds = "周六";
      }
      console.log(ds);
      this.inweek = ds;
    },
    getOutTime(time) {
      var dt = new Date(time);
      var ds = dt.getDay();
      if (ds === 0) {
        ds = "周日";
      } else if (ds === 1) {
        ds = "周一";
      } else if (ds === 2) {
        ds = "周二";
      } else if (ds === 3) {
        ds = "周三";
      } else if (ds === 4) {
        ds = "周四";
      } else if (ds === 5) {
        ds = "周五";
      } else if (ds === 6) {
        ds = "周六";
      }
      console.log(ds);
      this.outweek = ds;
    },
    getWeekin() {
      console.log(this.value1);
      var intime = this.value1;
      this.getTime(intime);
    },
    getWeekout() {
      var outtime = this.value2;
      this.getOutTime(outtime);
    },
    btn() {
      if (this.active === 0) {
        this.$router.push("/homestaypec");
      } else if (this.active === 1) {
        this.$router.push("/hotelpec");
      } else {
        this.$router.push("/shortrentalpec");
      }
    },
    onClick(name, title) {
      console.log(title);
      if (title === "酒店") {
        this.$router.push("/hotel");
      } else if (title === "民宿") {
        this.$router.push("/homestay");
      } else {
        this.$router.push("/shortrental");
      }
    },
    //选择城市
    selectCity(index) {
      console.log(this.list[index].address);

      this.city = this.list[index].address;
      this.show = false;
      this.arrows = !this.arrows;
    },
    //城市列表 显示 隐藏
    ulshow() {
      this.show = !this.show;
      this.arrows = !this.arrows;
    },
    downshow() {
      this.$router.push("/search");
    }
  },

  watch: {}
};
</script>
<style  scoped>
.zkh-nav {
  background-color: #eae9e9;
  color: #eae9e9;
}
#zkh-inner {
  margin-top: 10px;
}
.zkh-city {
  height: 66px;
  border-top: 2px solid #eeeeee;
  padding-top: 15px;
  padding-left: 5px;
}
.zkh-times {
  height: 80px;
  border-top: 2px solid #eeeeee;
  display: flex;
  justify-content: space-around;
}

.zkh-times .el-date-editor.el-input,
.el-date-editor.el-input__inner {
  width: 120px;
}
.zkh-times .block {
  position: relative;
}
.zkh-week {
  position: absolute;
  left: 90px;
  top: 50px;
  font-size: 14px;
}
.zkh-times .demonstration {
  height: 10px;
  width: 50%;
  margin: 15px;
}
.zkh-city i {
  font-style: normal;
  color: #bbbbbb;
  font-size: 14px;
}
.zkh-city span {
  color: #5b5a5a;
  font-size: 14px;
}
.zkh-cityul {
  border: 1px solid #ccc;
  width: 50%;
  float: left;
  position: absolute;
  left: 0;
  top: 185px;
  z-index: 999;
  background: #fff;
}
.zkh-li {
  list-style: none;
  height: 30px;
  border-bottom: 1px solid #ccc;
  line-height: 30px;
  text-align: center;
  color: #666;
  font-size: 16px;
}
.zkh-li:active {
  background-color: #ccc;
  color: #f00;
}
.zkh-time {
  display: flex;
  justify-content: space-around;
}
.zkh-search {
  height: 50px;
  border-top: 2px solid #eeeeee;
  border-bottom: 2px solid #eeeeee;
  display: flex;
  align-items: center;
  padding-right: 10px;
  font-size: 20px;
  color: #bbbbbd;
  margin-top: 2px;
}
.zkh-search span {
  color: #bbbbbb;
  font-size: 14px;
}
.zkh-button {
  text-align: center;
  margin-top: 100px;
}
.zkh-btnhomestay {
  width: 160px;
  border: 1px solid #ccc;
  border-radius: 10px;
  color: #fff;
}
</style>