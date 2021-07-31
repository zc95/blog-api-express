const express = require('express');
const router = express.Router();
const PostService = require('../service/post');
// const xss = require('node-xss').clean;

/**
 * @api {post} /api/post 新建文章
 * @apiDescription 新建文章
 * @apiName 新建文章
 * @apiGroup 文章
 *
 * @apiSampleRequest http://localhost:3000/api/post
 *
 * @apiParam {String} title 文章标题
 * @apiParam {String} content 文章内容
 * @apiParam {Array} tags 标签
 * @apiParam {Boolean} is_private 是否仅自己可见
 * @apiParamExample {json} 请求示例
 * {
 *   "title": "文章标题",
 *   "content": "文章内容",
 *   "tags": [],
 *   "is_private": false,
 * }
 *
 * @apiSuccess {Number} code 状态码
 * @apiSuccess {Object} data 返回数据
 * @apiSuccess {String} msg 信息
 * @apiSuccessExample {json} 响应示例
 * {
 *   "code": 0,
 *   "data": {},
 *   "msg": ""
 * }
 *
 * @apiVersion 1.0.0
 */
router.post('/', async(req, res, next) => {
    try {
        // 处理传参 TODO: xss还是统一处理比较好
        let { title, content, tags, is_private } = req.body;

        // 新增
        const post = new PostService();
        const result = await post.create({ title, content, tags, is_private });

        // 返回数据
        res.send({
            code : 0,
            data : result,
            msg  : '新建文章成功'
        });
    } catch (error) {
        next(error);
    }
});
module.exports = router;
