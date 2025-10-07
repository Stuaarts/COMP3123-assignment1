const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');
const User = require('../models/User');

exports.signup = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ status: false, errors: errors.array() });

    const { username, email, password } = req.body;
    const exists = await User.findOne({ $or: [{ email }, { username }] });
    if (exists) return res.status(409).json({ status: false, message: 'User already exists' });

    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ username, email, password: hash });
    res.status(201).json({ message: 'User created successfully.', user_id: String(user._id) });
  } catch (e) { next(e); }
};

exports.login = async (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ status: false, errors: errors.array() });

    const { email, username, password } = req.body;
    const user = await User.findOne(email ? { email } : { username });
    if (!user) return res.status(401).json({ status: false, message: 'Invalid Username and password' });

    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return res.status(401).json({ status: false, message: 'Invalid Username and password' });

    // Optional: add JWT here if you want
    res.json({ message: 'Login successful.' });
  } catch (e) { next(e); }
};
