const Post = require('../model/post');

class PostService {
    constructor() {
    }

    // 新增文章
    async create(params) {
        const post = new Post(params);
        const newPost = await post.create();
        return newPost;
    }
}

module.exports = PostService;
