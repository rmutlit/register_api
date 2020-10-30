var express = require('express');
var router = express.Router();

const controller = require("../controllers/registersControllers")

/* GET users listing. */
router.get('/', controller.index);
router.get('/show', controller.show);
router.post('/', controller.insert);

module.exports = router;
