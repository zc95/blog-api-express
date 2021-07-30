const mongoose = require('mongoose');

const PostSchemas = new mongoose.Schema({
    // 文章标题
    title: {
        type      : String,
        default   : '',
        trim      : true,
        required  : [true, '标题不能为空'],
        maxlength : [20, '标题最长20个字符']
    },

    // 描述
    desc: {
        type      : String,
        default   : '',
        trim      : true,
        required  : [true, '描述必填'],
        maxlength : [50, '描述最长50个字符']
    },

    // 内容
    content: {
        type      : String,
        default   : '',
        trim      : true,
        required  : [true, '文章内容必填'],
        maxlength : [5000, '文章内容最长5000个字符']
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

module.exports = mongoose.model('Post', PostSchemas, 'post');
