'use strict';

let globalConfig;

module.exports = function (app, cb) {
  try {
    require('../datasources/location.js')(app);

    return cb();
  } catch (error) {
    console.error(error);
    return cb(error);
  }
};
