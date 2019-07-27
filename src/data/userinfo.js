/*
 * @Description: 
 * @Author: 陈佳
 * @Date: 2019-07-18 11:35:38
 * @LastEditTime: 2019-07-18 22:17:46
 * @LastEditors: 陈佳
 */
import Mock from 'mockjs';

var data=Mock.mock({
	"list|5-10":[
			{
				"pid|+1":0,
				"time":"@date()",
				'img':'@image("200x100")',
				"text":'@cparagraph()'	
			}
		]
})

Mock.mock('http://sju37v.natappfree.cc/api/getuserinfo',data)