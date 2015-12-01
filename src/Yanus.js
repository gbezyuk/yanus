var Needlex = {};

function Yanus (defaults, signature, args) {
  function _shallow_copy(oldObj) {
      var newObj = {};
      for(var i in oldObj) {
          if(oldObj.hasOwnProperty(i)) {
              newObj[i] = oldObj[i];
          }
      }
      return newObj;
  }

  var params = _shallow_copy(defaults);
  var i;
  if (!args || !args.length || !signature  || !signature.length) {
    return params;
  }
  if (typeof args[0] == 'object') {
    for (i = 0; i < signature.length; i++) {
      var key = signature[i];
      if (key in args[0])
        params[key] = args[0][key];
    }
  } else {
    for (i = 0; i < Math.min(signature.length, args.length); i++) {
      params[signature[i]] = args[i];
    }
  }
  return params;
}

try {
  // for NodeJS and other require-capable engines
  module.exports = Yanus;
} catch (e) {
  // in case of plain <script src=...> style running in a browser
}
