/*
 * @Description: 
 * @Author: 陈佳
 * @Date: 2019-07-18 11:35:38
 * @LastEditTime: 2019-07-19 16:40:12
 * @LastEditors: 陈佳
 */
import Mock from 'mockjs';

var data = Mock.mock({
	"travelstorydetial":
	{
		"pid": "@natural()",
		'imgs': "@image('190x120')",
		"conlist|3-5": [{
			'imgs': "@image('190x120')",
			"des1": "@cparagraph()",
			"des2": "@cparagraph()",
		}],
		'title': '@cword(3,5)',
		"des": "@cword(10,20)",
		"price": "@natural(100,10000)",
		"time": "@natural(0,10)",
		"city": "@city()",
		"fdname": "@cname()",
		'fdimgs': "@image('100x100')",
		"type": "房源"
	}
})

Mock.mock('http://www.getstorydetial/api', data)
