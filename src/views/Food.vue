<!--
 * @Description: 
 * @Author: 陈佳
 * @Date: 2019-07-18 10:57:32
 * @LastEditTime: 2019-07-26 19:50:09
 * @LastEditors: 陈佳
 -->
<template>
  <div style="position: relative;">
    <!-- <p>{{count}}</p>
    <button @click="ttt">ttt</button>-->
    <van-nav-bar fixed:true left-arrow @click-left="onClickLeft" />
    <ul class="foodlist">
      <li v-for="(item, i) in list">
        <!-- 加载的数据 -->
        <van-image
          fit="contain"
          :src="item.img"
          v-tap="{ methods: todetial, id: item.id }"
        />
        <!-- <van-image fit="contain" :src="item.imgs" v-tap="{methods:todetial,pid:item.pid}" /> -->
        <van-row>
          <van-col span="22" offset="1">
            <p>{{ item.pid }}</p>
            <p>{{ item.title }}</p>
            <p>{{ item.info }}</p>
            <p>每人￥{{ item.price }}</p>
          </van-col>
        </van-row>
        <!-- 评分 -->
        <van-rate
          v-model="item.star"
          :size="18"
          color="#f44"
          void-icon="star"
          void-color="#eee"
        />
        <!-- 收藏爱心 -->
        <van-icon
          class="sc"
          size="26px"
          name="like"
          color="#f44"
          v-if="item.sc"
          @click.stop="qxsc(i)"
        />
        <van-icon
          class="sc"
          size="26px"
          name="like-o"
          color="black"
          v-else
          @click.stop="sc(i)"
        />
      </li>
    </ul>
    <!-- 底部 -->

    <!-- 底部标签栏 -->
    <van-tabbar v-model="active" id="zkh-footer">
      <van-tabbar-item icon="home-o" to="/index">推荐</van-tabbar-item>
      <van-tabbar-item icon="search" to="find">发现</van-tabbar-item>
      <van-tabbar-item icon="description" to="order">订单</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="myself">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import axios from "axios";
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "Food",
  data() {
    return {
      msg: "Food页面",
      list: [
        {
          id: 1,
          pid:1,
          star:3,
          title:"蒸面",
          price:399,
sc:true,
          img:"https://img.tukuppt.com/bg_grid/00/05/55/9Gad08ceNu.jpg!/fh/350",
          info:"面条超级好吃"
        },
        {
          id: 1,
          pid:1,
          star:3,
          title:"蒸面",
          price:399,
sc:false,
          img:"https://img.tukuppt.com/bg_grid/00/15/51/KJyyI71esy.jpg!/fh/350",
          info:"面条超级好吃"

        },
        {
          id: 1,
          pid:1,
          star:3,
          title:"蒸面",
          price:399,
sc:false,
          img:"https://img.tukuppt.com/bg_grid/00/17/76/dXvN5ys6Uw.jpg!/fh/350",
          info:"面条超级好吃"

        },
        {
          id: 1,
          pid:1,
          star:3,
          title:"蒸面",
          price:399,
sc:false,
          img:"https://img.tukuppt.com/bg_grid/00/05/55/9Gad08ceNu.jpg!/fh/350",
          info:"面条超级好吃"

        },
        {
          id: 1,
          pid:1,
          star:3,
          title:"蒸面",
          price:399,
sc:true,
          img:"https://img.tukuppt.com/bg_grid/00/09/71/B3secaLFLd.jpg!/fh/350",
          info:"面条超级好吃"

        },
        {
          id: 1,
          pid:1,
          star:3,
          title:"蒸面",
          price:399,
sc:false,
          img:"https://img.tukuppt.com/bg_grid/00/16/30/dUNFU0fmRB.jpg!/fh/350",
          info:"面条超级好吃"

        },
        
      ],
      active: 0
    };
  },
  created() {
    axios({
      //接口跨域了
      url: "http://106.13.26.54:8080/travelStory"
      // url: "http://106.13.26.54:8080/selectFoodALl"
    }).then(data => {
      console.log(data.data);
       this.list = data.data;
    });
    // axios({//模拟数据
    //   url: "http://www.getfoodlist/api"
    // }).then(data => {
    //    console.log(data.data)
    //   this.list = data.data.list;
    // });
  },
  computed: {
    ...mapState(["sname", "count", "userid"])
    // ...mapGetters([])
  },
  methods: {
    //返回上一页
    onClickLeft() {
      this.$router.go(-1);
    },
    // 收藏 该功能应该写个接口  需要修改数据的  接口不行啊  存不了啊
    sc(i) {
      var id = this.$store.state.userid;
      if (id == "") {
        this.$toast("您还未登录，不能点击收藏");
      } else {
        axios({
          url: "http://106.13.26.54:8080/userFoodSc",
          params: {
            foodId: i,
            userId: id
          }
        }).then(data => {
          console.log(data);
          if (data.data.code == 1) {
            this.list[i].sc = true;
          } else {
            this.$toast("收藏失败");
          }
        });
      }
    },
    //取消收藏
    qxsc(i) {
      var id = this.$store.state.userid;
      if (id == "") {
        this.$toast("您还未登录，不能点击收藏");
      } else {
        this.list[i].sc = false;
      }
    },
    //跳转到详情页
    todetial(a) {
      //console.log(a.id)
      this.$router.push({ name: "Fooddetial", query: { id: a.id } });
    }
    // ttt(){
    //   this.$router.push({path:"/personalInformation",query:{username:"xhm"}})
    // this.$router.push({path:"/test",query:{username:"小红帽"}})
    //  this.$router.push({name:"Test",params:{username:"小红帽"}})
    //}
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.foodlist {
  margin-bottom: 50px;
  overflow: hidden;
  display: flex;
  flex: 1;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
}
.foodlist li {
  width: 48%;
  font-size: 12px;
  position: relative;
}
p {
  margin: 0;
  padding: 0;
}
.sc {
  position: absolute;
  right: 10px;
  top: 10px;
}
</style>