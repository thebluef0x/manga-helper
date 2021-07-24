if(exports == null){
var exports = {};
}

exports.sum = (a, b) => {
    return a + b;
  };

exports.sum3 = (a, b, c) => {
    return a + b + c;
  };
  
exports.printMessage = (msg) => {
    console.log(msg);
  }

utils = exports;