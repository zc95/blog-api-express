const Post = require('../model/post');
const Markdown = require('../utils/markdown');

class PostService {
    constructor() {
    }

    // 新增文章
    async create(params) {
        // 处理desc
        const md = new Markdown(params.content);
        params.desc = md.getDesc(150);
        const newPost = await Post.create(params);
        return newPost;
    }
}

module.exports = PostService;
