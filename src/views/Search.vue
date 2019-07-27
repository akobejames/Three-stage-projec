<!--
 * @Description: 
 * @Author: 张坤贺
 * @Date: 2019-07-19 16:30:11
 * @LastEditTime: 2019-07-25 21:50:44
 * @LastEditors: 张坤贺
 -->

<template>
  <div>
    <div class="zkh-searchtop">
      <form action="/" style="margin:0">
        <van-search type="text" v-model="inputValue" placeholder="搜索酒店/地名/关键词" show-action shape="round" @search="onSearch" @cancel="onCancel" left-icon='' input-align='center' style="margin:0;background-color:#fff;" />
      </form>
    </div>
    <!-- 键盘输入框 -->
    <!-- <Keyboard
      :option="option"
      @keyVal="getInputValue"
      @close="option.show = false"
    ></Keyboard> -->

    <div id="zkh-inner">
      <van-cell value="热门搜索" />

      <div class="zkh-searchkuang">
        <span v-for="(item, index) in searchlist" @click="inputsearch(index)">{{item.text}}</span>
      </div>

      <van-cell title="历史记录">
        <van-icon slot="right-icon" name="clear" style="line-height: inherit;" @click="isShow" />
      </van-cell>
      <div class="zkh-history" v-show="show">
        <span v-for="(item, index) in historylist" @click="inputsearch(index)">{{item.text}}</span>
      </div>

    </div>

  </div>
</template>

<script>
//mport Keyboard from "../views/Keyboard";
import axios from "axios";
export default {
  name: "",
  props: [""],
  data() {
    return {
      searchlist: [],
      historylist: [],
      list: [],
      option: {
        show: false,
        sourceDom: ""
      },
      inputValue: "",
      show: true
    };
  },

  computed: {},
beforeCreate() {
   axios({
      url: "http://106.13.26.54:8080/selectHomestayAll"
    }).then(data => {
      this.list = data.data.slice(0, 6);
      console.log(this.list);
    });
},
  beforeMount() {},

  mounted() {
    axios({
      url: "http://106.13.26.54:8080/selectHomestayAll"
    }).then(data => {
      this.list = data.data;
      this.searchlist = data.data.slice(0, 5);
      this.historylist = data.data.slice(5, 10);
    });
    // axios.get("/static/indexdata.json").then(data => {
    //   this.list = data.data.list;
    //   this.searchlist = data.data.list.slice(0, 5);
    //   this.historylist = data.data.list.slice(5, 10);
    //   console.log(data.data.list.slice(0, 5));
    // });
  },

  methods: {
    onSearch() {
      this.$router.push("/tripdal");
    },
    onCancel() {
      this.$router.push("/index");
    },
    btn() {
      this.$router.push("/index");
    },
    inputsearch(index) {
      this.inputValue = this.list[index].text;
    },
    isShow() {
      this.show = !this.show;
    }
  },

  watch: {}
};
</script>
<style  lang="less" >
.zkh-searchtop .van-cell {
  margin: 0;
  background: #fff;
}
#zkh-inner .van-cell__value--alone {
  text-align: left;
}
.demo-class {
  input {
    border: 1px solid #ccc;
    outline: none;
    height: 30px;
    font-size: 16px;
    letter-spacing: 2px;
    padding: 0 5px;
    width: 80%;
    margin: 15px 5px;
    border-radius: 15px;
    text-align: center;
  }
}
.zkh-btnsearch {
  z-index: 999;
  position: absolute;
  top: 15px;
  right: 5px;
  border: 0;
  outline: none;
  width: 40px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  background-color: #fff;
}
.zkh-searchkuang,
.zkh-history {
  position: relative;
  display: flex;
  height: 120px;
  justify-content: space-around;
}
.zkh-searchkuang,
.zkh-history {
  span {
    border: 1px solid #ccc;
    height: 30px;
    margin: 15px 5px;
    background-color: #ebebeb;
    line-height: 30px;
    text-align: center;
    overflow: hidden;
    font-size: 14px;
    color: #bbb;
  }
}

.zkh-searchkuang,
.zkh-history {
  span:nth-of-type(1) {
    width: 80px;
  }
}
.zkh-searchkuang,
.zkh-history {
  span:nth-of-type(2) {
    width: 100px;
  }
}
.zkh-searchkuang,
.zkh-history {
  span:nth-of-type(3) {
    width: 100px;
  }
}
.zkh-searchkuang,
.zkh-history {
  span:nth-of-type(4) {
    width: 140px;
    top: 60px;
    left: 10px;
    position: absolute;
  }
}
.zkh-searchkuang,
.zkh-history {
  span:nth-of-type(5) {
    width: 140px;
    position: absolute;
    top: 60px;
    right: 10px;
  }
}
</style>
