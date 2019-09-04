const name = 'Ridho Abdul Majid'

//total character
console.log(name.length)

//first character
console.log(name.charAt(0))

//last character
console.log(name[name.lentgh-1])

//toLowerCase() change all char to lower case
console.log(name.toLowercase())

//toUpperCase() change all char to upper case
console.log(name.toUpperCase())

// \b Backspace
// \f Form feed 
// \n New Line 
// \r Cariiage return 
// \t Tab

 

let str = 'Widget with id';
console.log( str.indexOf('Widget') ); // 0, because 'Widget' is found at the beginning
console.log( str.indexOf('widget') ); // -1, not found, the search is case-sensitive

console.log( str.indexOf("id") ); // 1, "id" is found at the position 1 (..idget with id)

// slice

let str = "stringify";
alert( str.slice(0, 5) ); // 'strin', the substring from 0 to 5 (not including 5)
alert( str.slice(0, 1) ); // 's', from 0 to 1, but not including 1, so only character at 0