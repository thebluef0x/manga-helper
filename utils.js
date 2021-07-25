var utils = {};

utils.sum = (a, b) => {
    return a + b;
  };

utils.sum3 = (a, b, c) => {
    return a + b + c;
  };
  
utils.printMessage = (msg) => {
    console.log(msg);
  }


  
try{
  module.exports = utils;

}
catch(e){

}