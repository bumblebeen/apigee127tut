module.exports = {
  cacheKey: cacheKey,
};

function cacheKey(req) {
// This can check for a specific query parameter
  var key = req.swagger.params.city.value;
  console.log('Cache Key: ' + JSON.stringify(req.swagger.params, null, 2));
  return key;
}