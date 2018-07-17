var moment = require('moment');

// Jan 1st 1970 00:00:10 am

// var date = new Date();
// var months = ['Jan', 'Feb'];
// console.log(date.getMonth());

var date = moment();
date.add(100, 'years').subtract(9, 'months');
console.log(date.format('MMM Do, YYYY'));

console.log(date.format('h:mm a'));