/*
 * @Description: 
 * @Author: 张坤贺
 * @Date: 2019-07-18 08:41:27
 * @LastEditTime: 2019-07-19 20:56:55
 * @LastEditors: 李向阳
 */

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import 'lib-flexible'
import Clipboard from 'clipboard';
//陈佳模拟的数据
import './data/userinfo.js'
import './data/foodlist.js'
import './data/fooddetial.js'
import "./data/travlestorydetial.js"
import './data/orderdetial.js'
//张坤贺的数据

import './data/indexdata';
import './data/fooddetial';
import './data/foodlist';
import 'lib-flexible';


import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
Vue.use(ElementUI);

//付涵

import './data/trip';
import './data/bed';
import './data/travlestorydetial'
import './data/fhcomment';
import './data/indexdata';
import './data/hoteldetail';


//tap 点击事件
import VueTap from 'v-tap';
Vue.use(VueTap);

//vant ui
import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);

//分享组件
import 'vue-social-share/dist/client.css';
import Share from 'vue-social-share'
Vue.use(Share);

//状态管理
import vuex from 'vuex';
Vue.use(vuex);

import router from './router/index';
//vue状态管理 vuex
import store from './store';

Vue.config.productionTip = false
//懒加载
import {
  Lazyload
} from 'vant';
Vue.use(Lazyload);


//import store from './store/index';
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})


router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title;
   // chrome
   document.body.scrollTop = 0
   // firefox
   document.documentElement.scrollTop = 0
   // safari
   window.pageYOffset = 0
  next()
})

