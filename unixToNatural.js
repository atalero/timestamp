//this module converts unix time to a natural language time
var months = require('./months'); 

module.exports = function unixToNatural(unix){
  var date = new Date(parseInt(unix) *1000);
  return months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear(); 
}