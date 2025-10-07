require('dotenv').config();
const { connect } = require('./src/db');
const app = require('./src/app');

(async () => {
  await connect(process.env.MONGO_URI);
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`API on http://localhost:${port}`));
})();
