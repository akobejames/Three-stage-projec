/*
 * @Description: 
 * @Author: 付涵
 * @Date: 2019-07-20 09:36:11
 * @LastEditTime: 2019-07-20 11:24:55
 * @LastEditors: 付涵
 */

import Mock from 'mockjs';
var Random = Mock.Random;
var data = Mock.mock({
    "bedlist|5-10": [{
        "id|+1": 1,
        'imgs': "@image()",
        'title': '@cword(5,10)', //酒店名称
        'type': '@cword(5,10)', //高级大床房，标间，豪华双人间之类
        "price": "@natural(100,400)", //价格
        "num": "@natural(0,5)",
    }]


})

Mock.mock('http://www.getbed/api', data)