'use strict';

var util = require('util');
var request = require('request');

module.exports = {
  getWeatherByCity: getWeatherByCity
};

function getWeatherByCity(req, res) {
  var city = req.swagger.params.city.value;
  var url = "http://httpbin.org/uuid?q="+city;
  console.log('Executing request: '+url);
  request.get(url).pipe(res);
};