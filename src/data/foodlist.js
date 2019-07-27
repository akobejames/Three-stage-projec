/*
 * @Description: 
 * @Author: 陈佳
 * @Date: 2019-07-18 11:35:38
 * @LastEditTime: 2019-07-18 22:19:26
 * @LastEditors: 陈佳
 */
import Mock from 'mockjs';

var data=Mock.mock({
	"list|10-20":[
			{
				"pid|+1":0,
				'imgs':"@image('190x120')",		
				'title':'@cword(3,5)',
				"price":"@natural()",
				"des":"@cword(5,15)",
				"star":"@natural(0,5)",
				"sc":"@boolean()"
			}
		]
})

Mock.mock('http://www.getfoodlist/api',data)
