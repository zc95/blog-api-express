var mongoose = require('mongoose');

// 标签的表结构
module.exports = new mongoose.Schema({
    // 标签名称
    name: {
        type    : String,
        default : ''
    },

    // 描述
    desc: {
        type    : String,
        default : ''
    },

    // 是否被删除
    is_deleted: {
        type    : Boolean,
        default : false
    }
});
