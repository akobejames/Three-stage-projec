<!-- 用户评价（酒店详情内） -->
<template>
  <div>
    <van-nav-bar title="用户评价" left-text="返回" :fixed="true" left-arrow @click-left="onClickLeft">
    </van-nav-bar>

    <!-- 评分 -->
    <div id="inner">
      <div class="fhpingfen">
        <p>4.8分 很好</p>
      </div>
      <div class="fhfen">
        <p>酒店设施 4.9分</p>
        <p>酒店服务 4.9分</p>
      </div>
      <div class="fhfen">
        <p>酒店位置 4.9分</p>
        <p>酒店环境 4.9分</p>
      </div>

    </div>

    <!-- 标签页 -->
    <div class="fhnav">
      <van-tabs type="card" style="z-index:0">
        <van-tab title="全部">
          <div>
            <div class="fhcom" style="height:210px;" v-for="(item, index) in list" :key="index">
              <div style="display:flex;justify-content:space-between">
                <img class="fhphoto" :src="item.userImg" />
                <!-- 姓名，时间 -->
                <div style=" padding-right:10px;">
                  <div class="fhname">{{item.nickName}}
                    <span class="fhcity">{{item.time}}</span>
                  </div>
                  <!-- 用户评论 -->
                  <div class="fhpingjia">房子很好，干净卫生，房东很热心，在成都玩的很开心，如果下次有机会，会带家人一起来</div>
                  <van-grid :border="false" :column-num="3">
                    <van-grid-item>
                      <van-image :src="item.img" />
                    </van-grid-item>
                    <van-grid-item>
                      <van-image :src="item.img" />
                    </van-grid-item>
                    <van-grid-item>
                      <van-image :src="item.img" />
                    </van-grid-item>

                  </van-grid>
                  <hr>
                  <div>
                    <van-icon name="chat" />
                    商家回应：
                    <span>{{item.reply}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="最新">
          <div>
            <div class="fhcom" style="height:210px;" v-for="(item, index) in list" :key="index">
              <div style="display:flex;justify-content:space-between">
                <img class="fhphoto" :src="item.userImg" />
                <!-- 姓名，时间 -->
                <div style=" padding-right:10px;">
                  <div class="fhname">{{item.nickName}}
                    <span class="fhcity">{{item.time}}</span>
                  </div>
                  <!-- 用户评论 -->
                  <div class="fhpingjia">房子很好，干净卫生，房东很热心，在成都玩的很开心，如果下次有机会，会带家人一起来</div>
                  <van-grid :border="false" :column-num="3">
                    <van-grid-item>
                      <van-image :src="item.img" />
                    </van-grid-item>
                    <van-grid-item>
                      <van-image :src="item.img" />
                    </van-grid-item>
                    <van-grid-item>
                      <van-image :src="item.img" />
                    </van-grid-item>

                  </van-grid>
                  <hr>
                  <div>
                    <van-icon name="chat" />
                    商家回应：
                    <span>{{item.reply}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="最高">
          <div>
            <div class="fhcom" style="height:210px;" v-for="(item, index) in list" :key="index">
              <div style="display:flex;justify-content:space-between">
                <img class="fhphoto" :src="item.userImg" />
                <!-- 姓名，时间 -->
                <div style=" padding-right:10px;">
                  <div class="fhname">{{item.nickName}}
                    <span class="fhcity">{{item.time}}</span>
                  </div>
                  <!-- 用户评论 -->
                  <div class="fhpingjia">房子很好，干净卫生，房东很热心，在成都玩的很开心，如果下次有机会，会带家人一起来</div>
                  <van-grid :border="false" :column-num="3">
                    <van-grid-item>
                      <van-image :src="item.img" />
                    </van-grid-item>
                    <van-grid-item>
                      <van-image :src="item.img" />
                    </van-grid-item>
                    <van-grid-item>
                      <van-image :src="item.img" />
                    </van-grid-item>

                  </van-grid>
                  <hr>
                  <div>
                    <van-icon name="chat" />
                    商家回应：
                    <span>{{item.reply}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="有图">
          <div>
            <div class="fhcom" style="height:210px;" v-for="(item, index) in list" :key="index">
              <div style="display:flex;justify-content:space-between">
                <img class="fhphoto" :src="item.userImg" />
                <!-- 姓名，时间 -->
                <div style=" padding-right:10px;">
                  <div class="fhname">{{item.nickName}}
                    <span class="fhcity">{{item.time}}</span>
                  </div>
                  <!-- 用户评论 -->
                  <div class="fhpingjia">房子很好，干净卫生，房东很热心，在成都玩的很开心，如果下次有机会，会带家人一起来</div>
                  <van-grid :border="false" :column-num="3">
                    <van-grid-item>
                      <van-image :src="item.img" />
                    </van-grid-item>
                    <van-grid-item>
                      <van-image :src="item.img" />
                    </van-grid-item>
                    <van-grid-item>
                      <van-image :src="item.img" />
                    </van-grid-item>

                  </van-grid>
                  <hr>
                  <div>
                    <van-icon name="chat" />
                    商家回应：
                    <span>{{item.reply}}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>

  </div>
</template>

<script>
import axios from "axios";
import { Toast } from "vant";
export default {
  data() {
    return {
      list: []
    };
  },
  beforeCreate() {
    axios({
      url: "http://106.13.26.54:8080/selectCommentAll"
    }).then(data => {
      console.log(data);
      this.list = data.data;
      console.log(this.list);
    });
  },

  methods: {
    onClickLeft() {
      Toast({
        message: "返回",
        duration: 500
      });
      this.$router.go(-1);
    }
  }
};
</script>
<style scoped>
#inner {
  margin-top: 46px;
  display: flex;
}

.fhpingfen {
  width: 120px;
  height: 100px;
  font-size: 12px;
  float: left;
  /* background:#f22; */
  text-align: center;
  line-height: 70px;
}
/* .fhmargin{
  position: relative;
  top:-50px;
  z-index:-1;
 
} */
.fhfen {
  width: 180px;
  height: 50px;
  float: left;
}
.fhfen p {
  margin: 0;
  padding: 0;
  width: 130px;
  height: 48px;
  float: left;
  text-align: center;
  line-height: 48px;
  font-size: 12px;
}
.fhphoto {
  border-radius: 50%;
  width: 80px;
  height: 80px;
}
.fhname {
  height: 30px;
  font-size: 14px;
  margin-top: 15px;
}
.fhname span {
  font-size: 12px;
  color: #ccc;
  padding: 0 0 0 70px;
}
.fhpingjia {
  text-indent: 2em;
  font-size: 13px;
  color: #cecece;
}
</style>