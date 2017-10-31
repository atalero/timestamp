var months = require('./months');
const regEx = /[0-9]{1,2}\s*(,|\s*)\s*[0-9]{4}/;//regular expression for the date and year portions of a natural languagr date e.g. November <5, 2017>

var monthsRegEx = [];
for(var i = 0; i < months.length; i++){
  monthsRegEx.push(new RegExp(months[i].toLowerCase()));
}

module.exports = function checkBoolean(string){
  string = string.toLowerCase(); 
  for(var i = 0; i < months.length; i++){
    if(monthsRegEx[i].test(string) && regEx.test(string)){
      var dateAndYear = string.match(regEx);
      var date = dateAndYear[0].match(/^[0-9]{1,2}/);
      var year = dateAndYear[0].match(/[0-9]{4}$/);
      return [months[i],date[0], year[0], i + 1];
      }
    }
    return false;
}
