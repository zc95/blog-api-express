const mongoose = require('mongoose');

const schemas = new mongoose.Schema({
    // 标签名称
    name: {
        type    : String,
        default : ''
    },

    // 描述
    desc: {
        type    : String,
        default : ''
    }
});

module.exports = mongoose.model('tag', schemas);
