<!--
 * @Description: 
 * @Author: 张坤贺
 * @Date: 2019-07-18 08:41:27
 * @LastEditTime: 2019-07-26 09:24:53
 * @LastEditors: 张坤贺
 -->

<template>
  <div id="zkh-index">
    <!-- 导航 -->
    <van-row type="flex" justify="space-around" id="zkh-header">
      <!-- 选择城市 -->
      <van-col span="7">
        <select v-model="city" class="zkh-city">
          <option v-for="option in arr" :value="option.name">
            {{ option.name }}
          </option>
        </select>
      </van-col>
      <!-- 搜索框 -->
      <van-col span="16" style="text-align: center;margin:0;">
        <van-search placeholder="搜索" v-model="value" shape="round" @click="search" left-icon="" style="text-align: center;margin:0" class="zkh-search" />
      </van-col>
      <!-- 消息框 -->
      <van-col span="8" style="text-align: center;background: #fff;margin:0">
        <van-field v-model="value1" placeholder="消息" style="text-align: center;background: #fff;margin:0" />
      </van-col>

    </van-row>

    <!-- ,轮播 -->

    <van-swipe :autoplay="3000" :height="200">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" style="width:100%;height:200px" />
      </van-swipe-item>
    </van-swipe>

    <div id="zkh-inner">
      <!-- 格子 -->
      <van-cell value="房源推荐" :border="false" />
      <van-grid :border="false" :column-num="3" class="zkh-home">
        <van-grid-item v-for="(item, index) in homestaylist" :key="index" @click="skip(index)" style="padding:0">
          <van-image :src="item.img" width="80" height="100" fit="cover" />
          <span>{{ name[index] }}</span>

        </van-grid-item>
      </van-grid>

      <van-cell value="探索体验" :border="false" />
      <van-grid :border="false" :column-num="3">
        <van-grid-item to="/travelstory" v-for="(item, index) in triplist" :key="index" v-tap={methods:food}>
          <van-image :src="item.img" fit="cover" width="80" height="100" />
          <span>{{ name1[index]}}</span>
        </van-grid-item>
      </van-grid>

      <div id="zkh-trave">
        <van-cell value="精彩旅遊故事" :border="false" />
        <van-row type="flex" justify="space-between" class="zkh-traves">
          <van-col class="zkh-place" v-for="(item, index) in travelstorylist" :key="index">
            <van-image height="100" :src="item.img" class="zkh-img" fit="cover" v-tap={methods:travelstory} />
            <h4>{{ item.name }}</h4>
            <p>{{ item.text}}</p>
            <div class="zkh-font">
              <van-col span="10" class="zkh-fontleft" v-tap={methods:myself}>
                <van-icon name="manager" />
              </van-col>
              <span>
                <van-icon name="youzan-shield" v-tap.stop="{methods:dianzan}" />
                <van-icon size="20px" color="black" name="like" v-tap.stop="{methods:sc,i:index}" />
                <van-icon name="chat" v-tap.stop="{methods:chat}" />
              </span>
            </div>
          </van-col>
        </van-row>
      </div>

      <van-cell value="旅游攻略" :border="false" />
      <div class="zkh-strategy" v-for="(item, index) in strategylist" :key="index">
        <van-image height="140" lazy-load :src="item.img" v-tap="{methods:travel}" />
        <p>{{ item.text }}</p>
        <van-icon class="zkh-icon" size="20px" color="#f44" v-if="item.flag" name="like" v-tap.stop="{methods:qxsc,i:index}" />
        <van-icon class="zkh-icon" size="20px" color="black" v-else name="like" v-tap.stop="{methods:sc,i:index}" />
      </div>
    </div>

    <!-- 底部标签栏 -->
    <van-tabbar v-model="active" id="zkh-footer">
      <van-tabbar-item icon="home-o" v-tap={methods:toindex}>推荐</van-tabbar-item>
      <van-tabbar-item icon="search" v-tap={methods:tofind}>发现</van-tabbar-item>
      <van-tabbar-item icon="description" v-tap={methods:toorder}>订单</van-tabbar-item>
      <van-tabbar-item icon="user-o" v-tap={methods:tomyself}>我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Index",
  props: [""],
  data() {
    return {
      active: 0,
      value: "",
      value1: "",
      switch1: false,
      switch2: false,
      list: [],
      arr: [
        { name: "选择城市" },
        { name: "长沙市" },
        { name: "娄底市" },
        { name: "南昌市" },
        { name: "九江市" },
        { name: "" },
        { name: "" },
        { name: "" },
        { name: "" }
      ],
      city: "选择城市",
      cityArr: [],
      homestaylist: [],
      triplist: [],
      travelstorylist: [],
      strategylist: [],
      name: ["民宿", "酒店", "短租"],
      name1: ["美食", "历史", "旅游"],
      num: [0, 1],
      images: [
        // "http://img4.imgtn.bdimg.com/it/u=3422346977,2553788595&fm=26&gp=0.jpg",
        // "http://img2.imgtn.bdimg.com/it/u=2543992394,2802996820&fm=26&gp=0.jpg",
        // "http://img5.imgtn.bdimg.com/it/u=538930594,714478555&fm=26&gp=0.jpg",
        // "http://img4.imgtn.bdimg.com/it/u=432479983,1330634475&fm=26&gp=0.jpg"
        " http://upload.art.ifeng.com/2017/0109/1483923885348.jpg",
        "http://img4.99114.com/group1/M00/30/EE/wKgGTFchYLyAHUPlAAHQtKY9kNk195.jpg",
        "http://5b0988e595225.cdn.sohucs.com/images/20190628/11e43012d5e94ad6817f4f6f5e8fbc7e.jpeg",
        "http://5b0988e595225.cdn.sohucs.com/images/20171212/f1b89a7f3aca4f25aa158c0c4f8c327d.jpeg",
        "http://img.zcool.cn/community/01fc16554bcbdc000001bf725333c1.jpg@1280w_1l_2o_100sh.jpg",
        "http://img1.qunarzz.com/travel/d7/1808/37/a17e1fd453dd5fb5.jpg_r_720x480x95_4dd56e15.jpg",
        "http://5b0988e595225.cdn.sohucs.com/images/20180715/7aeb4e2ca48a408fa38aed763789d25d.jpeg"
      ]
    };
  },
  methods: {
    toindex() {
      this.$router.push("/index");
    },
    tofind() {
      this.$router.push("/find");
    },
    toorder() {
      this.$router.push("/order");
    },
    tomyself() {
      this.$router.push("/myself");
    },

    //跳转 旅游攻略
    travel() {
      this.$router.push("/travel");
    },
    //跳转 美食
    food() {
      this.$router.push("/food");
    },
    // 跳转旅游故事
    travelstory() {
      this.$router.push("/travelstory");
    },
    //跳转 搜索
    search() {
      this.$router.push("/search");
    },
    //跳转 民宿 酒店 短租 搜索
    skip(index) {
      console.log(index);
      if (index === 0) {
        this.$router.push("/homestay");
      } else if (index === 1) {
        this.$router.push("/hotel");
      } else {
        this.$router.push("/shortrental");
      }
    },
    dianzan(a) {
      //点赞
      console.log("赞");
    },
    // 收藏
    sc(a) {
      this.flag = true;
    },
    //跳转我的
    myself() {
      this.$router.push("/myself");
    },
    //跳转到评论页面

    chat(i) {
      this.$router.push("/comments");
    }
  },
  components: {},

  computed: {},
  beforeCreate() {
    axios({
      url: "http://106.13.26.54:8080/selectHomestayAll"
    }).then(data => {
      console.log(data);
      this.list = data.data;
      for (let i in this.arr) {
        this.arr[0].name = "选择城市";
        this.arr[i].name = this.list[i].address;
      }
      this.homestaylist = data.data.slice(0, 3);
      this.triplist = data.data.slice(3, 6);
      this.travelstorylist = data.data.slice(0, 4);
      this.strategylist = data.data.slice(0, 2);
    });
  },
  created() {},
  beforeMount() {},

  mounted() {
    // axios.get("/static/indexdata.json").then(data => {
    //   console.log(data.data.list);
    //   this.list = data.data.list;
    //   for (let i in this.arr) {
    //     this.arr[0].name = "选择城市";
    //     this.arr[i].name = this.list[i].address;
    //   }
    //   this.homestaylist = data.data.list.slice(0, 3);
    //   this.triplist = data.data.list.slice(3, 6);
    //   this.travelstorylist = data.data.list.slice(0, 4);
    //   this.strategylist = data.data.list.slice(0, 2);
    // });
  },

  watch: {
    city: function() {
      console.info("city=" + this.city);
    }
  }
};
</script>
<style  scoped>
.zkh-search .van-cell {
  margin: 0;
  background: #fff;
  font-size: 14px;
}
#zkh-trave .van-cell:not(:last-child)::after {
  border-bottom: 0;
}
#zkh-index {
  display: flex;
  flex-direction: column;
}
#zkh-header {
  padding: 10px 10px;
  align-items: center;
}
#zkh-inner {
  flex: 1;
  margin-bottom: 56px;
}
.zkh-swipeimg {
  height: 200px;
}
.zkh-home {
  position: relative;
  display: flex;
}
.zkh-home span {
  position: absolute;
  width: 33px;
  height: 30px;
  z-index: 999;
  left: 20%;
  top: 10%;
  font-size: 16px;
  color: #f33;
}

.zkh-city {
  height: 30px;
  width: 78px;
  border: 1px solid #eee;
  background-color: #fff;
  color: #bbbbbb;
  outline: none;
  border-radius: 10px;
}

#zkh-trave {
  height: 460px;
}
.zkh-traves {
  margin-top: 20px;
  margin-bottom: 10px;
  position: relative;
}
.zkh-place {
  width: 50%;
  height: 150px;
}
.zkh-place:nth-of-type(3) {
  position: absolute;
  left: 0%;
  top: 130%;
}
.zkh-place:nth-of-type(4) {
  position: absolute;
  left: 50%;
  top: 130%;
}
.zkh-place .zkh-img {
  margin-left: 20px;
  margin-right: 20px;
}

.zkh-place h4 {
  height: 15px;
  font-weight: 100;
  font-size: 14px;
  text-align: center;
  margin: 0;
  padding: 0;
}

.zkh-place p {
  height: 20px;
  font-size: 14px;
  padding-left: 10px;
  margin: 10px 0;
  word-break: keep-all;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.zkh-font {
  font-size: 20px;
}

.zkh-fontleft {
  padding-left: 20px;
}

.zkh-strategy {
  position: relative;
  margin: 10px 0;
}
.zkh-strategy p {
  width: 100%;
  height: 30px;
  position: absolute;
  left: 0;
  bottom: 0px;
  margin: 0;
  color: #ff0;
  word-break: keep-all;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
}
.zkh-icon {
  position: absolute;
  right: 20px;
  top: 10px;
  font-size: 20px;
}
</style>