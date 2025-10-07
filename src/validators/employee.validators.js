const { body, param, query } = require('express-validator');

const createRules = [
  body('first_name').isString().notEmpty(),
  body('last_name').isString().notEmpty(),
  body('email').isEmail(),
  body('position').isString().notEmpty(),
  body('salary').isFloat({ gt: 0 }),
  body('date_of_joining').isISO8601(),
  body('department').isString().notEmpty()
];

const idParamRule = [ param('eid').isMongoId() ];
const deleteQueryRule = [ query('eid').isMongoId() ];

module.exports = { createRules, idParamRule, deleteQueryRule };
