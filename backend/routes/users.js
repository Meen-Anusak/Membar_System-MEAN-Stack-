var express = require('express');
var router = express.Router();
const User_controller = require('../controllers/user_controller');
const passport = require('../configs/passprot_JWT')


/* GET users listing. */
router.post('/register', User_controller.register);
router.post('/login', User_controller.Login);
router.get('/profile', passport.isLogin, User_controller.getProfile);


module.exports = router;