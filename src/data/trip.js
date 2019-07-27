/*
 * @Description: 
 * @Author: 付涵
 * @Date: 2019-07-20 09:36:11
 * @LastEditTime: 2019-07-20 10:52:41
 * @LastEditors: 付涵
 */

import Mock from 'mockjs';
var Random = Mock.Random;
var data = Mock.mock({
    "list|5-10": [{
        "id|+1": 1,
        'imgs': "@image('350x130')",
        'title': '@cword(5,10)',
        "price": "@natural(100,400)",
        "star": "@natural(0,5)",
        "num": "@natural(0,5)",
        "city": "@city(0,5)",
    }]


})

Mock.mock('http://www.gettrip/api', data)