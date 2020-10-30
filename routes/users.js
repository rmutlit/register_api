var express = require('express');
var router = express.Router();

const controller =require("../controllers/userControllers")
/* GET users listing. */
router.get('/', controller.index);
router.get('/show', controller.show);

module.exports = router;
