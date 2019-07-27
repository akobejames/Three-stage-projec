/*
 * @Description: 
 * @Author: 付涵
 * @Date: 2019-07-18 11:35:38
 * @LastEditTime: 2019-07-24 10:55:09
 * @LastEditors: 付涵
 */
import Mock from 'mockjs';

var data = Mock.mock({
    "hoteldetial": {
        "pid": "@natural()",
        'img': "@image('190x120')", //酒店图片	
        'title': '@cword(3,5)', //酒店名称
        "des": "@cword(5,15)", //酒店简介			
        "city": "@city()", //酒店城市				
        "conlist|3-5": [{
            "id|+1": 0,
            "name": "@cname()", //大床房，标间，双人间
            'imgs': "@image('190x120')",
            "price": "@natural(100,500)", //价格
        }],
    }
})

Mock.mock('http://www.gethoteldetial/api', data)