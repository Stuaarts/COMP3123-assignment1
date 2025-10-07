const { Schema, model } = require('mongoose');

const userSchema = new Schema({
  username: { type: String, required: true, trim: true, unique: true },
  email:    { type: String, required: true, trim: true, unique: true },
  password: { type: String, required: true }, // store hash
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

module.exports = model('User', userSchema);
