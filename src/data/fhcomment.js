/*
 * @Description: 
 * @Author: 付涵
 * @Date: 2019-07-20 17:39:57
 * @LastEditTime: 2019-07-20 19:19:14
 * @LastEditors: 付涵
 */

import Mock from 'mockjs';

var data = Mock.mock({
    "comlist|5-8": [{
        "pid": "@natural()",
        'userheadimg': "@image('100x100')",
        'usernames': '@cword(2,3)',
        "ucontent": "@cword(10,20)",
        "shopcontent": "@cword(10,20)",
        "city": "@city()",
        "imgs": "@image('100x100')",
        "time": "2017/10/23"
    }]
})

Mock.mock('http://www.getfhcomment/api', data)