'use strict';

var debug = require('helpers');

module.exports = {
  clientIp: clientIp
};

function clientIp(req) {
  var key = req.connection.remoteAddress;
  console.log('clientIp Key: ' + key);
  return key;
}