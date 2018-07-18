const {get} = require('lodash');

const config = {
  db: {
    host: 'herthamdb',
    name: 'price_history',
    port: 5432,
    username: 'postgres',
    password: ''
  }
}

module.exports = {
  get: function(path) {
    return get(config, path, {});
  }
}
