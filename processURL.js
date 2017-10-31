var checkBoolean = require('./checkBoolean');
var unixToNatural = require('./unixToNatural');
var validNatural;
const MAX_TIME = 4294967295; //max UNIX time (2^32 -1)
const MIN_TIME = 0; //start of UNIX TIME since 00:00:00 Coordinated Universal Time (UTC), Thursday, 1 January 1970
var object = {};

//the value received is the string after the last slash (/) in the URL
module.exports = function(value) {
  /*
  This is a test to ensure a valid UNIX time (max time is maximum number represented by 32-bit integer, equal to 2^32-1, min time is 0 = jan 1, 1970)
  */
  if(/^\d+$/.test(value) && parseInt(value) <= MAX_TIME && parseInt(value) >= MIN_TIME ){
    console.log(value);
    object.unix = value;
    object.natural = unixToNatural(value);      
   //the checkBoolean module returns a boolean for whether the request is a valid natural langugage date 
  } else if(validNatural = checkBoolean(value)){
    //a new date is created using the js Date() instance
    var dateTime = new Date(validNatural[2] + '-' + validNatural[3] + '-' +validNatural[1]).getTime();
    object.unix = Math.floor(dateTime / 1000);
    object.natural = validNatural[0] + " " + validNatural[1] + ", " + validNatural[2]; 
  } else{
    //if request does NOT contain valid UNIX time or natural time, return null in our object
    object.unix = null;
    object.natural = null;
  }
  return object;
}