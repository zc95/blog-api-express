const Post = require('../model/post');
const Markdown = require('../utils/markdown');

class PostService {
    constructor() {
    }

    // 新增/修改文章
    save(params) {
        const { _id, content } = params;

        // 处理desc
        // const md = new Markdown(content);
        // params.desc = md.getDesc(150);

        if (_id) {
            return Post.updateOne({ _id }, params);
        } else {
            // 新增
            return Post.create(params);
        }
    }

    // 查询单个文章
    find(_id) {
        return Post.findById(_id);
    }

    // 查询所有
    search() {
        return Post.find();
    }

    // 删除单个文章
    delete(_id) {
        return Post.deleteOne({ _id });
    }

}

module.exports = PostService;
