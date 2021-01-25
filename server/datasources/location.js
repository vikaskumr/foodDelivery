'use strict';

module.exports = function (app) {

  app.dataSources['location'] = app.loopback.createDataSource({
    name: 'location',
    connector: require('loopback-connector-rest'),
    debug: false,
    options: {
      headers: {
        'accepts': 'application/json',
        'content-type': 'application/json'
      },
      strictSSL: false,
      timeout: 1200000
    },
    operations: [
      {
        template: {
          method: 'GET',
          url: `https://maps.googleapis.com/maps/api/geocode/json?&address='{address}'&key=`,
          headers: {},
          options: {},
          responsePath: ''
        },
        functions: {
          'fetchCoordinates': ['address']
        }
      }
    ]
  });
  app.models['LocationModel'] = app.dataSources['location'].createModel('LocationModel', {

  });

}
