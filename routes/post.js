const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();
const PostService = require('../service/post');

/**
 * @api {post} /api/post 新建文章
 * @apiDescription 新建文章
 * @apiName 新建文章
 * @apiGroup 文章
 *
 * @apiSampleRequest http://localhost:3000/api/post
 *
 * @apiParam {String} title 文章标题
 * @apiParam {String} desc 描述
 * @apiParamExample {json} 请求示例
 * {
 *   "title": "文章标题",
 *   "desc": "描述"
 * }
 *
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {Object} data 返回数据
 * @apiSuccess {String} msg 信息
 * @apiSuccessExample {json} 响应示例
 * {
 *   "code": 0,
 *   "data": {}
 *   "msg": ""
 * }
 *
 * @apiVersion 1.0.0
 */
router.post('/', async(req, res) => {
    const { title, desc } = req.body;
    const post = new PostService();
    const result = await post.create({ title, desc });
    res.send({
        code : 0,
        data : result,
        msg  : '新建文章成功'
    });
});
module.exports = router;
