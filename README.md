## 个人博客
从零搭建个人博客的后端站点

## 技术栈
- nodejs
- express
- mongodb
- mongoose (ORM 框架)
- eslint

## blog表结构
参考 
- http://www.bubuko.com/infodetail-2693776.html
- https://www.jianshu.com/p/cbb288e6e88b

表
- user
    - create_time
    - avatar
    - blog
    - telephone
    - name
    - password
- post
    - create_time
    - create_by
    - update_time
- tag
    - create_date
    - create_by
- comment

## RESTful API
- [阮一峰 RESTful API 设计指南](https://www.ruanyifeng.com/blog/2014/05/restful_api.html)
- [eggjs RESTful API](https://eggjs.org/zh-cn/tutorials/restful.html)

## mongodb数据结构
[MongoDB-数据类型](https://www.cnblogs.com/songzhixue/p/11203036.html)

Object ID ：Documents 自生成的 _id

String： 字符串，必须是utf-8

Boolean：布尔值，true 或者false (这里有坑哦~在我们大Python中 True False 首字母大写)

Integer：整数 (Int32 Int64 你们就知道有个Int就行了,一般我们用Int32)

Double：浮点数 (没有float类型,所有小数都是Double)

Arrays：数组或者列表，多个值存储到一个键 (list哦,大Python中的List哦)

Object：如果你学过Python的话,那么这个概念特别好理解,就是Python中的字典,这个数据类型就是字典

Null：空数据类型 , 一个特殊的概念,None Null

Timestamp：时间戳

Date：存储当前日期或时间unix时间格式 (我们一般不用这个Date类型,时间戳可以秒杀一切时间类型)

## nodejs 参考文档
- [node 中文文档](http://nodejs.cn/)
## express 参考文档
- [express 中文文档](https://www.expressjs.com.cn/)

## mongodb 参考文档
- [mongodb 中文文档](https://www.mongodb.com/zh-cn)
- [Mac中mongoDB的安装与卸载步骤详解](https://www.jb51.net/article/127232.htm)
- [Mac下安装MongoDB和可视化工具以及安装过程中问题解决办法](https://blog.csdn.net/it_cgq/article/details/94762335)
- [账户密码](https://www.cnblogs.com/xiaojf/p/12785912.html)

## mongoose 参考文档
- [mongoosejs 中文文档](http://www.mongoosejs.net/) 有点落后
- [mongoosejs 官方文档](https://mongoosejs.com/)
- [在Express项目中使用Mongoose](https://www.cnblogs.com/winyh/p/6682032.html)
- [Mongoose 校验参数](https://blog.csdn.net/weixin_30598225/article/details/99466013)

## chalk 文档
- [chalk](https://www.npmjs.com/package/chalk)

## APIDOC
- [官方文档](https://apidocjs.com/)
- https://blog.csdn.net/q3585914/article/details/80326330
- https://www.jianshu.com/p/7e1b057b047c/

## 使用tree-node-cli生成树状目录
https://segmentfault.com/a/1190000022900724