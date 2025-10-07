// api/index.js
const { connect } = require('../src/db');
const app = require('../src/app');

let connected = false;

module.exports = async (req, res) => {
  try {
    if (!connected) {
      const uri = process.env.MONGO_URI;   // set in Vercel → Settings → Environment Variables
      await connect(uri);                  // throws if missing/invalid
      connected = true;
    }
    return app(req, res);                  // hand off to Express
  } catch (err) {
    console.error('Serverless error:', err);
    res.statusCode = 500;
    res.end(JSON.stringify({ status: false, error: 'Internal Server Error' }));
  }
};

