/*
 * @Description: 
 * @Author: 陈佳
 * @Date: 2019-07-18 11:35:38
 * @LastEditTime: 2019-07-24 11:27:45
 * @LastEditors: 陈佳
 */
import Mock from 'mockjs';

var data=Mock.mock({
	"orderdetial":
			{
				"phonenum":"@natural(11)",				
				'ordernum':'@natural(12)',
				"price":"@natural(100,1000)",
				"name":"@cname()",				
				"beizhu":"@cword(10,15)",
				"address":"@city()"


			}		
})

Mock.mock('http://www.getorderdetial/api',data)
