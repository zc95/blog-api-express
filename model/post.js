const mongoose = require('mongoose');

const PostSchemas = new mongoose.Schema({
    // 封面
    cover_image: {
        type    : String,
        default : '',
        trim    : true
    },
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
        type     : String,
        default  : '',
        trim     : true,
        required : false
    },

    // 内容
    content: {
        type      : String,
        default   : '',
        trim      : true,
        required  : [true, '文章内容不能为空'],
        maxlength : [20000, '文章内容最长20000个字符']
    },

    // 关联的tags
    tags: {
        type    : Array,
        default : []
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
}, { timestamps: true });

module.exports = mongoose.model('Post', PostSchemas, 'post');
