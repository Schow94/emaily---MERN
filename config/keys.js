// keys.js - figure out what set of credentials to return

if (process.env.NODE_ENV === 'production') {
  module.export = require('./prod');
} else {
  module.export = require('./dev');
}
