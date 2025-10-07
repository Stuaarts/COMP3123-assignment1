const { Schema, model } = require('mongoose');

const employeeSchema = new Schema({
  first_name: { type: String, required: true, trim: true },
  last_name:  { type: String, required: true, trim: true },
  email:      { type: String, required: true, trim: true, unique: true },
  position:   { type: String, required: true, trim: true },
  salary:     { type: Number, required: true },
  date_of_joining: { type: Date, required: true },
  department: { type: String, required: true, trim: true }
}, { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } });

module.exports = model('Employee', employeeSchema);
