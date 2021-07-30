const Post = require('../model/post');

// 新增文章
function save(req) {
    var post = new Post(req);
    post.save();
}

module.exports = {
    save
};
