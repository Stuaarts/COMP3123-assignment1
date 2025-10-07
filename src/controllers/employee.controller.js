const { validationResult } = require('express-validator');
const Employee = require('../models/Employee');

exports.list = async (_req, res, next) => {
  try {
    const docs = await Employee.find().lean();
    const out = docs.map(d => ({
      employee_id: String(d._id),
      first_name: d.first_name, last_name: d.last_name,
      email: d.email, position: d.position, salary: d.salary,
      date_of_joining: d.date_of_joining, department: d.department
    }));
    res.json(out);
  } catch (e) { next(e); }
};

exports.create = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ status: false, errors: errors.array() });

    const emp = await Employee.create(req.body);
    res.status(201).json({ message: 'Employee created successfully.', employee_id: String(emp._id) });
  } catch (e) { next(e); }
};

exports.getById = async (req, res, next) => {
  try {
    const emp = await Employee.findById(req.params.eid).lean();
    if (!emp) return res.status(404).json({ status: false, message: 'Not found' });
    res.json({
      employee_id: String(emp._id),
      first_name: emp.first_name, last_name: emp.last_name,
      email: emp.email, position: emp.position, salary: emp.salary,
      date_of_joining: emp.date_of_joining, department: emp.department
    });
  } catch (e) { next(e); }
};

exports.update = async (req, res, next) => {
  try {
    await Employee.findByIdAndUpdate(req.params.eid, req.body, { runValidators: true });
    res.json({ message: 'Employee details updated successfully.' });
  } catch (e) { next(e); }
};

exports.remove = async (req, res, next) => {
  try {
    const { eid } = req.query;
    const deleted = await Employee.findByIdAndDelete(eid);
    if (!deleted) {
      return res.status(404).json({ status: false, message: 'Not found' });
    }
    return res.status(204).send();
  } catch (e) { next(e); }
};
