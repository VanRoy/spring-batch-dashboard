/**
 * @author: @AngularClass
 */

// Look in ./config folder for webpack.dev.js
switch (process.env.NODE_ENV) {
  case 'test':
  case 'testing':
    module.exports = require('./config/webpack.test');
    break;
  case 'dev':
  case 'development':
    module.exports = require('./config/webpack.dev');
    break;
  case 'prod':
  case 'production':
  default:
    module.exports = require('./config/webpack.prod');
}
