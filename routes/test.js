const express = require('express');
// eslint-disable-next-line new-cap
const router = express.Router();

router.get('/get-api', (req, res) => {
    console.log(req.query);
    res.send({
        code : 0,
        msg  : '测试get请求'
    });
});
module.exports = router;
