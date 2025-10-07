const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/user.routes');
const employeeRoutes = require('./routes/employee.routes');
const errorHandler = require('./middleware/errorHandler');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/emp',  employeeRoutes);

app.get('/', (_req, res) => res.json({ ok: true }));

app.use(errorHandler);
module.exports = app;
