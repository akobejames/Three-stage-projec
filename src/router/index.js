/*
 * @Description: 
 * @Author: 李向阳·
 * @Date: 2019-07-18 09:52:08
 * @LastEditTime: 2019-07-26 08:35:26
 * @LastEditors: 张坤贺
 */
import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

export default new Router({
  routes: [{
      path: '/myself', //我的
      meta: {
        title: '我的'
      },
      name: 'Myself',
      component: () => import('../views/Myself.vue'),
    },
    {
      path: '/personalInformation', //个人资料设置
      meta: {
        title: '个人资料设置'
      },
      name: 'PersonalInformation',
      component: () => import('../views/PersonalInformation.vue'),
    },
    {
      path: '/setting', //设置
      meta: {
        title: '设置'
      },
      name: 'Setting',
      component: () => import('../views/Setting.vue'),
    },
    {
      path: '/zhanghu', //账户
      meta: {
        title: '账户'
      },
      name: 'Zhanghu',
      component: () => import('../views/Zhanghu.vue'),
    },
    {
      path: '/ruanjian', //软件通知
      meta: {
        title: '软件通知'
      },
      name: 'Ruanjian',
      component: () => import('../views/Ruanjian.vue'),
    },
    {
      path: '/invite', //邀请好友
      meta: {
        title: '邀请好友'
      },
      name: 'Invite',
      component: () => import('../views/Invite.vue'),
    },
    {
      path: '/guanyu', //关于
      meta: {
        title: '关于'
      },
      name: 'Guanyu',
      component: () => import('../views/Guanyu.vue'),
    },
    {
      path: '/youhui', //优惠券
      meta: {
        title: '优惠券'
      },
      name: 'Youhui',
      component: () => import('../views/Youhui.vue'),
    },
    {
      path: '/xinyong', //芝麻信用
      meta: {
        title: '芝麻信用'
      },
      name: 'Xinyong',
      component: () => import('../views/Xinyong.vue'),
    },
    {
      path: '/address', //地址
      meta: {
        title: '地址'
      },
      name: 'Address',
      component: () => import('../views/Address.vue'),
    },
    {
      path: '/plus', //新增地址
      meta: {
        title: '新增地址'
      },
      name: 'Plus',
      component: () => import('../views/Plus.vue'),
    },
    {
      path: '/vipmember', //会员权益
      meta: {
        title: '会员权益'
      },
      name: 'Vipmember',
      component: () => import('../views/Vipmember.vue'),
    },
    {
      path: '/connect', //联系客服
      meta: {
        title: '联系客服'
      },
      name: 'Connect',
      component: () => import('../views/Connect.vue'),
    },
    {
      path: '/huiyuan', //金卡会员
      meta: {
        title: '金卡会员'
      },
      name: 'Huiyuan',
      component: () => import('../views/Huiyuan.vue'),
    },

    {
      path: '/suggestion', //意见反馈
      meta: {
        title: '意见反馈'
      },
      name: 'Suggestion',
      component: () => import('../views/Suggestion.vue'),
    },
    {
      path: '/look', //浏览收藏
      meta: {
        title: '浏览收藏'
      },
      name: 'Look',
      component: () => import('../views/Look.vue'),
    },
    {
      path: '/tjemail', //添加邮箱
      meta: {
        title: '添加邮箱'
      },
      name: 'Tjemail',
      component: () => import('../views/Tjemail.vue'),
    },
    {
      path: '/phonenumber', //修改手机号
      meta: {
        title: '修改手机号'
      },
      name: 'Phonenumber',
      component: () => import('../views/Phonenumber.vue'),
    },
    {
      path: '/idcard', //修改身份证号码
      meta: {
        title: '修改身份证号码'
      },
      name: 'Idcard',
      component: () => import('../views/Idcard.vue'),
    },
    //CJ
    {
      path: "/",
      redirect: '/login'
    },
    {
      path: '/index', //首页
      meta: {
        title: '首页'
      },
      name: 'Index',
      component: () => import('../views/Index.vue'),
    },
    {
      path: '/login', //登录
      meta: {
        title: '登录'
      },
      name: 'Login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/xiugaimima', //找回密码
      meta: {
        title: '找回密码'
      },
      name: 'Xiugaimima',
      component: () => import('../views/Xiugaimima.vue'),
    },
    {
      path: '/food', //美食列表页    
      meta: {
        title: '美食'
      },
      name: 'Food',
      component: () => import('../views/Food.vue'),
    },
    {
      path: '/fooddetial', //美食详情页
      meta: {
        title: '美食详情'
      },
      name: 'Fooddetial',
      component: () => import('../views/Fooddetial.vue'),
    },
    {
      path: '/travelstory', //旅行故事列表页
      meta: {
        title: '旅行故事'
      },
      name: 'Travelstory',
      component: () => import('../views/Travelstory.vue'),
    },
    {
      path: '/Travelstorydetial', //旅行故事详情页
      meta: {
        title: '旅行故事详情'
      },
      name: 'Travelstorydetial',
      component: () => import('../views/Travelstorydetial.vue'),
    },
    {
      path: '/sharep', //分享页
      meta: {
        title: '分享'
      },
      name: 'Sharep',
      component: () => import('../views/Sharep.vue'),
    },
    {

      path: '/orderdetial', //订单详情
      meta: {
        title: '订单详情'
      },
      name: 'Orderdetial',
      component: () => import('../views/Orderdetial.vue'),
    },
    {
      path: '/order', //支付订单
      meta: {
        title: '支付订单'
      },
      name: 'Order',
      component: () => import('../views/Order.vue'),
    },
    {
      path: '/orderok', //预订成功
      meta: {
        title: '预订成功'
      },
      name: 'Orderok',
      component: () => import('../views/Orderok.vue'),
    },
    {
      path: '/feiyongmingxi', //费用明细
      meta: {
        title: '费用明细'
      },
      name: 'Feiyongmingxi',
      component: () => import('../views/Feiyongmingxi.vue'),
    },
    //FH

    //ZKH
    {
      path: '/homestay',
      meta: {
        title: '房源'
      },
      name: 'HomeStay',
      component: () => import('../views/HomeStay.vue'),
    },
    {
      path: '/hotel',
      meta: {
        title: '酒店'
      },
      name: 'Hotel',
      component: () => import('../views/Hotel.vue'),
    },
    {
      path: '/shortrental',
      meta: {
        title: '短租'
      },
      name: 'ShortRental',
      component: () => import('../views/ShortRental.vue'),
    },
    {
      path: '/homestaypec',
      meta: {
        title: '短租'
      },
      name: 'HomeStayPec',
      component: () => import('../views/HomeStayPec.vue'),
    },
    {
      path: '/hotelpec',
      meta: {
        title: '酒店推荐'
      },
      name: 'HotelPec',
      component: () => import('../views/HotelPec.vue'),
    },
    {
      path: '/shortrentalpec',
      meta: {
        title: '短租推荐'
      },
      name: 'ShortRentalPec',
      component: () => import('../views/ShortRentalPec.vue'),
    },
    {
      path: '/search',
      meta: {
        title: '搜索'
      },
      name: "Search",
      component: () => import('../views/Search.vue'),
    },

    {
      path: '/find', //首页
      redirect: '/travel',
      name: 'Find',
      meta: {
        title: "发现"
      },
      component: () => import('../views/Find.vue'),
      children: [{
        path: "/travel",
        meta: {
          title: "旅行攻略"
        },
        component: () => import('../views/Travel.vue'),

      }, {
        path: "/trip",
        meta: {
          title: "出行专题"
        },
        component: () => import('../views/Trip.vue'),

      }, {
        path: "/story",
        meta: {
          title: "房东故事"
        },
        component: () => import('../views/Story.vue'),

      }, {
        path: "/comments",
        meta: {
          title: "评论"
        },
        component: () => import('../views/Comments.vue'),
      }, ]
    },
    {
      path: "/usercom",
      meta: {
        title: "用户评论"
      },
      component: () => import('../views/Usercom.vue'),
    }, {
      path: "/hoteldetail",
      meta: {
        title: "酒店详情"
      },
      component: () => import('../views/Hoteldetail.vue'),
    },
    {
      path: "/bed",
      meta: {
        title: "房间详情"
      },
      component: () => import('../views/Bed.vue'),
    }, {
      path: "/order",
      meta: {
        title: "订单详情"
      },
      component: () => import('../views/Order.vue'),
    },
    {
      path: "/tripdal",
      meta: {
        title: "出行详情"
      },
      component: () => import('../views/Tripdal.vue'),
    }, {
      path: "/traveldetail",
      meta: {
        title: "旅行攻略详情"
      },
      component: () => import('../views/Traveldetail.vue'),
    }, {
      path: "/tripdetails",
      meta: {
        title: "出行酒店详情"
      },
      component: () => import('../views/Tripdetails.vue'),
    }

  ]
})
