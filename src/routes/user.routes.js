const router = require('express').Router();
const { signup, login } = require('../controllers/user.controller');
const { signupRules, loginRules } = require('../validators/user.validators');

router.post('/signup', signupRules, signup); // 201
router.post('/login',  loginRules,  login);  // 200

module.exports = router;
