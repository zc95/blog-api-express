const mongoose = require('mongoose');
const schemas = require('../schemas/article');

module.exports = mongoose.model('article', schemas);
