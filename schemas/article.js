var mongoose = require('mongoose');

// 文章的表结构
module.exports = new mongoose.Schema({
    // 文章标题
    title: {
        type    : String,
        default : ''
    },

    // 描述
    desc: {
        type    : String,
        default : ''
    },

    // 内容
    content: {
        type    : String,
        default : ''
    },

    // 关联的tag
    tag: {
        type    : Array,
        default : []
    },

    // 是否被删除
    is_deleted: {
        type    : Boolean,
        default : false
    },

    // 是否置顶
    is_top: {
        type    : Boolean,
        default : false
    },

    // 是否仅自己可见
    is_private: {
        type    : Boolean,
        default : false
    },

    //阅读量
    views: {
        type    : Number,
        default : 0
    }
});
