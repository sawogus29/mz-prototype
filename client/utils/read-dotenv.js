const dotenv = require('dotenv-flow');

const readDotenv = () => {
  const backup = process.env;
  const newEnv = {};
  process.env = newEnv;
  dotenv.config();
  process.env = backup;

  return newEnv;
};

module.exports = { readDotenv };
