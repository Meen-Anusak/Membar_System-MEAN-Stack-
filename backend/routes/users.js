var express = require('express');
var router = express.Router();
const User_controller = require('../controllers/user_controller');


/* GET users listing. */
router.post('/', User_controller.register);
module.exports = router;