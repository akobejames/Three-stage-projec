<!--
 * @Description: 
 * @Author: 付涵
 * @Date: 2019-07-18 11:19:39
 * @LastEditTime: 2019-07-25 22:20:54
 * @LastEditors: 张坤贺
 -->
<!-- 旅行攻略 -->
<template>
  <div>
    <van-tabs @click="onClick" v-model="active">
      <van-tab title="旅行攻略">

      </van-tab>
      <van-tab title="出行专题">

      </van-tab>
      <van-tab title="房东故事">

        <van-grid :column-num="1">

          <van-grid-item v-for="(item, i) in list" :key="i">
            <van-image style="height:150px" fit="cover" @click="fhbtn(item.id)" :src="item.img" />
            <div class="Stitle">{{item.info}}</div>
            <div>
              <div style="display:inline">{{item.time}}</div>
              <div style="margin-left:100px;display:inline">

                <van-icon size="20px" color="#f44" v-if="item.sc" name="like" v-tap.stop="{methods:qxsc,i:i}" />
                <van-icon size="20px" color="black" v-else name="like" v-tap.stop="{methods:sc,i:i}" />

                <van-icon size="20px" color="black" name="chat" v-tap.stop="{methods:chat,pid:item.pid}" />

              </div>
            </div>

            <van-divider />
          </van-grid-item>
        </van-grid>

      </van-tab>
      <van-tab title="用户评论"></van-tab>
    </van-tabs>

  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      active: 2,
      list: []
    };
  },
  beforeCreate() {
    axios({
      url: "http://106.13.26.54:8080/travelStory"
    }).then(data => {
      console.log(data);
      this.list = data.data;
      console.log(this.list);
    });
  },
  methods: {
    onClick(name, title) {
      console.log(name, title);
      if (name == 0) {
        this.$router.push("/travel");
      } else if (name == 1) {
        this.$router.push("/trip");
      } else if (name == 2) {
        this.$router.push("/story");
      } else {
        this.$router.push("/comments");
      }
    },
    fhbtn(id) {
      this.$router.push({ path: "/traveldetail" });
    },
    sc(a) {
      this.list[a.i].sc = true;
    },
    //取消收藏
    qxsc(a) {
      console.log(a);
      this.list[a.i].sc = false;
    },
    chat(i) {
      //跳转到评论页面
      this.$router.push("/comments");
    }
  }
};
</script>
<style scoped>
.title {
  position: relative;
  left: -4rem;
  width: 12rem;
  overflow: hidden;
  word-break: keep-all;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>