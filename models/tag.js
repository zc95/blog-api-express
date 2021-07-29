const mongoose = require('mongoose');
const schemas = require('../schemas/tag');

module.exports = mongoose.model('tag', schemas);
