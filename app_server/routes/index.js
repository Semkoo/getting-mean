var express = require('express');
var router = express.Router();
var ctrlMain = require('../controllers/main');


/* GET home page. */
router.get('/', ctrlMain.indexc);

module.exports = router;
