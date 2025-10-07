const serverless = require('@vercel/node'); // provided by Vercel runtime
require('dotenv').config();
const { connect } = require('../src/db');
const app = require('../src/app');

let ready = false;
async function bootstrap() {
  if (!ready) {
    await connect(process.env.MONGO_URI);
    ready = true;
  }
}

module.exports = async (req, res) => {
  await bootstrap();
  return app(req, res);
};
