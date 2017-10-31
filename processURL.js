var checkBoolean = require('./checkBoolean');
var unixToNatural = require('./unixToNatural');
var validNatural;
const MAX_TIME = 4294967295; //max UNIX time (2^32 -1)
const MIN_TIME = 0; //start of UNIX TIME since 00:00:00 Coordinated Universal Time (UTC), Thursday, 1 January 1970
var object = {};

module.exports = function(value) {
  //console.log('entered function with value ' + value);
  if(/^\d+$/.test(value) && parseInt(value) <= MAX_TIME && parseInt(value) >= MIN_TIME ){
    console.log(value);
    object.unix = value;
    object.natural = unixToNatural(value);      
  } else if(validNatural = checkBoolean(value)){
    var dateTime = new Date(validNatural[2] + '-' + validNatural[3] + '-' +validNatural[1]).getTime();
    object.unix = Math.floor(dateTime / 1000);
    object.natural = validNatural[0] + " " + validNatural[1] + ", " + validNatural[2]; 
  } else{
    object.unix = null;
    object.natural = null;
  }
  return object;
}