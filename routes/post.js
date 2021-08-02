const express = require('express');
const router = express.Router();
const PostService = require('../service/post');
// const xss = require('node-xss').clean;

// 新增/编辑文章
router.post('/', async(req, res, next) => {
    try {
        // 处理传参 TODO: xss还是统一处理比较好
        let { _id, cover_image, title, content, tags, is_private } = req.body;

        // 新增
        const post = new PostService();
        const data = await post.save({ _id, cover_image, title, content, tags, is_private });

        // 返回数据
        res.send({
            code : 0,
            data,
            msg  : `${_id ? '修改' : '新增'}成功`
        });
    } catch (error) {
        next(error);
    }
});

// 查询单个文章详情
router.get('/:id', async(req, res) => {
    try {
        const post = new PostService();
        const data = await post.find(req.params.id);

        if (data && data._id) {
            res.send({
                code: 0,
                data
            });
        } else {
            throw new Error();
        }
    } catch (error) {
        res.send({
            code : 1,
            data : null,
            msg  : '文章不存在'
        });
    }
});

// 查询所有文章
router.get('/', async(req, res) => {
    try {
        const post = new PostService();
        const data = await post.search();

        if (data && data.length) {
            res.send({
                code: 0,
                data
            });
        } else {
            throw new Error();
        }
    } catch (error) {
        res.send({
            code : 1,
            data : null,
            msg  : '文章不存在'
        });
    }
});

// 删除单个文章
router.delete('/:id', async(req, res, next) => {
    try {
        const post = new PostService();
        const data = await post.delete(req.params.id);

        if (data && data.deletedCount && data.ok) {
            res.send({
                code : 0,
                msg  : '删除成功'
            });
        } else {
            next(new Error('操作失败'));
        }
    } catch (error) {
        next(new Error('操作失败'));
    }
});

module.exports = router;
