/*
 * @Description: 
 * @Author: 陈佳
 * @Date: 2019-07-18 11:35:38
 * @LastEditTime: 2019-07-18 22:19:28
 * @LastEditors: 陈佳
 */
import Mock from 'mockjs';

var data=Mock.mock({
	"fooddetial":
			{
				"pid":"@natural()",
				'imgs':"@image('190x120')",		
				'title':'@cword(3,5)',
				"price":"@natural(100,10000)",
				"des":"@cword(5,15)",
				"star":"@natural(0,5)",
				"city":"@city()",
				"name":"@cname()",
				"active":"@cparagraph()",
				"tynr":[
					"@cword(5,15)",
					"@cword(5,15)",
					"@cword(5,15)",
				],
				"imgs1":"@image('100x100')",
				"beizhu":"@cparagraph()"


			}		
})

Mock.mock('http://www.getfooddetial/api',data)
