const router = require('express').Router();
const ctrl = require('../controllers/employee.controller');
const { createRules, idParamRule, deleteQueryRule } = require('../validators/employee.validators');

router.get('/employees', ctrl.list);                          // 200
router.post('/employees', createRules, ctrl.create);          // 201
router.get('/employees/:eid', idParamRule, ctrl.getById);     // 200
router.put('/employees/:eid', idParamRule, ctrl.update);      // 200
router.delete('/employees', deleteQueryRule, ctrl.remove);    // 204

module.exports = router;
