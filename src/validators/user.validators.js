const { body } = require('express-validator');

const signupRules = [
  body('username').isString().trim().notEmpty(),
  body('email').isEmail(),
  body('password').isLength({ min: 6 })
];

const loginRules = [
  body('email').optional().isEmail(),
  body('username').optional().isString().trim().notEmpty(),
  body('password').isLength({ min: 6 })
];

module.exports = { signupRules, loginRules };
