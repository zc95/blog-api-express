const express = require('express');
const router = express.Router();
const PostService = require('../service/post');
// const xss = require('node-xss').clean;

// 新增文章
router.post('/', async(req, res, next) => {
    try {
        // 处理传参 TODO: xss还是统一处理比较好
        let { title, content, tag, is_private } = req.body;

        // 新增
        const post = new PostService();
        const result = await post.create({ title, content, tag, is_private });

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
