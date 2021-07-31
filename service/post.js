const Post = require('../model/post');

class PostService {
    constructor() {
    }

    // 新增文章
    async create(params) {
        const newPost = await Post.create(params);
        return newPost;
    }
}

module.exports = PostService;
