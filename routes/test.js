const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    return next(new Error('qqq'));
});
module.exports = router;
