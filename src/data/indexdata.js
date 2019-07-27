import Mock from 'mockjs';
var Random = Mock.Random;


var data = Mock.mock({
  "list|10": [{ //接口地址 http://jielinhao.com/indexdata

    "id|+1": 0, //id 值  number类型
    'img': '@image("200x100")', //图片链接     链接就行
    "name": '@cword(5, 7)', //酒店 民宿 名字      随便文字就行
    "address": '@city()', //城市   
    "price": '@natural(100,1000)', // 价格   number类型
    "num": '@natural(1,10000)', //消费人数    number类型 我设置了一个范围1--10000  你可以随机个数
    "dis": '@float(0, 9, 1, 9)', // 优惠折扣   float类似 0.1---9.9之间
    "search": '@cword(3, 10)', //热门搜索     随便文字就行
    'history': '@cword(3, 10)', // 历史搜索   随便文字就行
    "text": "@cparagraph(1, 3)",
    "time": "@date('yyyy-MM-dd')",
    "flag": false
  }]
})

Mock.mock('http://jielinhao.com/indexdata', data)
