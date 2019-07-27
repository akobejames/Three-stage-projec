<!--
 * @Description: 
 * @Author: 付涵
 * @Date: 2019-07-19 19:19:05
 * @LastEditTime: 2019-07-25 21:52:46
 * @LastEditors: 付涵
 -->
<!-- 出行专题详情页 -->
<template>
  <div>
       <van-row>
      <van-col span="2">
        <van-nav-bar
          left-arrow
          @click-left="onClickLeft"
        >
        </van-nav-bar>
      </van-col>
      <van-col
        span="18"
        offset="2"
      >
        <van-search
          placeholder="搜索 酒店/地名/关键词"
          v-model="value"
          shape="round"
        />
      </van-col>
    </van-row>
     <van-dropdown-menu id="fh-nav">
          <van-dropdown-item
        v-model="value1"
        :options="option1"
        @change="getcity"
      />
      <van-dropdown-item
        v-model="value2"
        :options="option2"
        @change="sortprice"
      />
      <van-dropdown-item
        v-model="value3"
        :options="option3"
        @change="sortnum"
      />
      <van-dropdown-item
        v-model="value4"
        :options="option4"
        @change="discount"
      />
    </van-dropdown-menu>

  <div id="inner">
      <van-grid :column-num="1">
           
        <van-grid-item
           v-for="(item, i) in search(value)"
          :key="i"
           
        >
        
       <van-image
     

            fit="cover"
            :src="item.imgs"
            @click="fhbtn(item.id)"
            />
             <!-- <van-icon class="fhiconl" name="like"  /> -->
              <van-icon class="fhiconl" size="20px" color="#f44" v-if="item.sc" name="like" v-tap.stop="{methods:qxsc,i:i}" />
            <van-icon class="fhiconl" size="20px" color="black" v-else name="like" v-tap.stop="{methods:sc,i:i}" />

            <div class="fhprice">￥{{item.price}}</div>
             <div  class="title">{{item.title}}</div>  <br> 
            <div  class="titles"><p>整租|客栈|宜住{{item.num}}人</p> <span>{{item.city}}</span></div> 
            <div class="pingfen">{{item.star}}</div>  
            <van-divider />
        </van-grid-item>
    </van-grid>
</div>


  </div>
</template>

<script>
import {Toast} from 'vant';
// import { Search } from 'vant';
import axios from "axios";
export default {
  
  data () {
    return {
       value:"",
      value1: 0,
      value2: "a",
      value3: "A",
      value4: "0-a",
      option1: [
        { text: "位置区域", value: 0 },
        { text: "北京", value: 1 },
        { text: "海南", value: 2 },
        { text: "桂林", value: 3 },
        { text: "杭州", value: 4 },
        { text: "广州", value: 5 },
        { text: "贵州", value: 6 }
      ],
      option2: [
        { text: "价格", value: "a" },
        { text: "价格升序", value: "b" },
        { text: "价格降序", value: "c" }
      ],
      option3: [
        { text: "智能排序", value: "A" },
        { text: "销量排序", value: "B" }
      ],
      option4: [{ text: "筛选", value: "0-a" }, { text: "评分", value: "0-b" }],
      loading: false,
      finished: true,
      list: []


    };
  },
  beforeCreate() {
     axios({
     // url:"/api/selectTripHotelAll"
     url:"http://106.13.26.54:8080/selectTripHotelAll"
    }).then(data=>{
     
      this.list=data.data;
       console.log(this.list);
    })
  },
 
  methods: {
      onClickLeft() {
      Toast({
        message:'返回',
        duration:500	
        });
      this.$router.go(-1)
    },
    sc(a) {
      
      this.list[a.i].sc = true;
    },
    //取消收藏
    qxsc(a) {
      console.log(a)
      this.list[a.i].sc = false;
    },
    onConfirm() {
      this.$refs.item.toggle();
    },
    fhbtn(id){
      console.log(id)
        this.$router.push({path:"/hoteldetail",query:{id:id}})
    },
    //搜索过滤
  //   search(value) {
  //      console.log(this.list);
  //    console.log(value);
  //     var newList = this.list.filter(item => {
  //         if (item.name.includes(value)) {
  //             return item
  //         }
  //     })
  //     return newList
  // },

    search(value) {
      // console.log(this.list);
      // console.log(value);
      var newList = [];
      this.list.forEach(item => {
        if (
          item.title.indexOf(value) != -1 ||
          item.city.indexOf(value) != -1
        ) {
          newList.push(item);
        }
      });
      return newList;
    },
    //选择城市
    getcity() {
      // console.log(this.value1);
      // console.log(this.option1);
      var newList = [];
      if (this.value1 === 0) {
        this.value = "";
      } else {
        this.value = this.option1[this.value1].text;
      }
     // console.log(this.value);
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
        this.list.sort(this.compare1("id"));
      } else if (this.value4 === "0-b") {
        this.list.sort(this.compare1("star"));
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
  
}

</script>
<style scoped>
#inner{
    position: relative;
}
.fhiconl{
    position: absolute;
    right:35px;
    top:20px;
}
.fhprice{
    position: absolute;
    left:35px;
    bottom:80px;
     background-color: aliceblue;
  opacity: 0.6;
}
.title{
position: absolute;
left:30px;
bottom: 35px;
  width:280px;
   overflow: hidden;
  word-break: keep-all;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.titles p{
    position: absolute;
    left:30px;
    bottom:13px;
    font-size:14px;
    width:130px;
    padding: 0;
    margin:0;
    color: #ccc;
 
}
.titles span{
    position: absolute;
    right:65px;
    bottom:13px;
    font-size:14px;
    width:130px;
    padding: 0;
    margin:0;
    color: #ccc;
 
}
.pingfen{
     position: absolute;
    right:40px;
    bottom:8px;
    font-size:30px;
    padding: 0;
    margin:0;
    color: #ccc;
 
}
</style>