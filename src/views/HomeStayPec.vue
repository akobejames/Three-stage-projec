<!--
 * @Description: 
 * @Author: 张坤贺
 * @Date: 2019-07-18 21:14:20
 * @LastEditTime: 2019-07-26 10:06:16
 * @LastEditors: 张坤贺
 -->

<template>

  <div class="zkh-homepec">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <!-- 顶部标签栏 -->
      <van-row>
        <van-col span="2">
          <van-nav-bar left-arrow @click-left="onClickLeft" style="background:#fff">
          </van-nav-bar>
        </van-col>
        <van-col span="18" offset="2" class="zkh-sou">
          <van-search placeholder="搜索 酒店/地名/关键词" v-model="value" shape="round" style="margin:0;background-color:#fff" left-icon="" />
        </van-col>
      </van-row>
      <!-- 下拉菜单 -->
      <van-dropdown-menu id="zkh-nav">
        <van-dropdown-item v-model="value1" :options="option1" @change="getcity" />
        <van-dropdown-item v-model="value2" :options="option2" @change="sortprice" />
        <van-dropdown-item v-model="value3" :options="option3" @change="sortnum" />
        <van-dropdown-item v-model="value4" :options="option4" @change="discount" />
      </van-dropdown-menu>
      <!-- 中间列表 -->
      <div id="zkh-inner">
        <ul class="zkh-li">
          <li v-for="(item, index) in search(value)" :key="index" class="zkh-listouter">
            <van-image :src=" item.img " class="zkh-imgs" fit='cover' v-tap={methods:detail,id:item.id} />
            <div class="zkh-listinner">
              <p>{{item.name}}</p>
              <p>{{item.num}}人</p>
              <p>{{item.address}}</p>
              <p>
                <span>{{item.price}}元</span>
                <span>{{item.dis.toFixed(2)}}折</span>
              </p>
            </div>
          </li>
        </ul>

      </div>
    </van-pull-refresh>

  </div>

</template>

<script>
import axios from "axios";
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "",
  props: [""],
  data() {
    return {
      value: "",
      value1: 0,
      value2: "a",
      value3: "A",
      value4: "0-a",
      option1: [
        { text: "位置区域", value: 0 },
        { text: "北京", value: 1 },
        { text: "上海", value: 2 },
        { text: "郑州", value: 3 },
        { text: "杭州", value: 4 },
        { text: "广州", value: 5 },
        { text: "贵州", value: 6 }
      ],
      option2: [
        { text: "价格/星级", value: "a" },
        { text: "价格升序", value: "b" },
        { text: "价格降序", value: "c" }
      ],
      option3: [
        { text: "智能排序", value: "A" },
        { text: "销量排序", value: "B" }
      ],
      option4: [{ text: "筛选", value: "0-a" }, { text: "折扣", value: "0-b" }],
      loading: false,
      finished: true,
      list: [],
      count: 4,
      isLoading: false,
      loading: false,
      finished: false
    };
  },
  components: {},

  computed: {},
  beforeCreate() {
    axios({
      url: "http://106.13.26.54:8080/selectHomestayAll"
    }).then(data => {
      this.list = data.data.slice(0, 4);
      console.log(this.list);
    });
  },
  beforeMount() {},

  mounted() {
    //   axios.get("/static/indexdata.json").then(data => {
    //     this.list = data.data.list;
    //     console.log(this.list);
    //   });
  },
  methods: {
    ...mapActions(["loginm"]),
    detail(id) {
      console.log(id.id);
      this.$store.commit("detailIds", { id: id.id });
      this.$router.push("/hoteldetail");
    },
    init() {
      axios({
        url: "http://106.13.26.54:8080/selectHomestayAll"
      }).then(data => {
        this.list = data.data.slice(0, this.count);
        console.log(this.list);
      });
    },
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
        this.count++;
        this.init();
      }, 500);
    },
    onClickLeft() {
      this.$router.push("/homestay");
    },
    //搜索过滤
    search(value) {
      console.log(this.list);
      var newList = [];
      this.list.forEach(item => {
        if (
          item.name.indexOf(value) != -1 ||
          item.address.indexOf(value) != -1
        ) {
          newList.push(item);
        }
      });
      return newList;
    },
    //选择城市
    getcity() {
      if (this.value1 === 0) {
        this.value = "";
      } else {
        this.value = this.option1[this.value1].text;
      }
    },
    //价格排序
    sortprice() {
      // console.log(this.sortType);
      // var type = this.sortType;

      if (this.value2 === "b") {
        this.list.sort(this.compare("price"));
      } else if (this.value2 === "c") {
        this.list.sort(this.compare1("price"));
      } else {
        this.list.sort(this.compare("id"));
      }
    },
    //销量排序
    sortnum() {
      // this.sortType = "num";
      // var type = this.sortType;
      // console.log(this.value3);
      if (this.value3 === "B") {
        this.list.sort(this.compare1("num"));
      } else if (this.value3 === "A") {
        this.list.sort(this.compare("id"));
      }
    },
    //折扣排序 筛选
    discount() {
      if (this.value4 === "0-a") {
        this.list.sort(this.compare("id"));
      } else if (this.value4 === "0-b") {
        this.list.sort(this.compare("dis"));
      }
    },
    //排序 升序
    compare(attr) {
      return function(a, b) {
        var val1 = a[attr];
        var val2 = b[attr];
        return val1 - val2;
      };
    },
    //排序 降序
    compare1(attr) {
      return function(a, b) {
        var val1 = a[attr];
        var val2 = b[attr];
        return val2 - val1;
      };
    }
  },

  watch: {}
};
</script>
<style  scoped>
.zkh-homepec .zkh-sou .van-cell {
  margin: 0;
  background-color: #fff;
}
.zkh-homepec {
  display: flex;
  flex-direction: column;
}
#zkh-nav {
  font-size: 14px;
  color: #888888;
}
.zkh-listouter {
  display: flex;
  justify-content: space-around;
}
.zkh-li {
  margin: 10px 0;
  font-size: 14px;
  color: #333;
}
.zkh-imgs {
  margin: 5px 10px;
  padding: 0;
  vertical-align: middle;
}
#zkh-inner {
  flex: 1;
}
.zkh-listinner p {
  width: 150px;
  height: 30px;
  margin: 5px 0;
  padding: 0;
  line-height: 30px;
  display: flex;
  text-align: center;
}
.zkh-listinner p:nth-of-type(2) {
  width: 60px;
}
.zkh-listinner span {
  display: block;
  width: 60px;
  background-color: #FF4444;
  margin: 0 10px;
  text-align: center;
  border-radius: 20px;
}
.zkh-listinner span:first-child {
  margin-left: 0;
}
</style>