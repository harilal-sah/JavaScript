//JavaScript Datatypes Conversion:

let score = false;

console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber) 
//if NaN then it means "Not a Number"


// when we are converting 33 string to 33 number easily it can be converted 


// but when we are trying to convert that "33abc" to string it gives -> NaN(Not a Number)

let isLoggedIn = 0

let checkBoolean = Boolean(isLoggedIn)

console.log(checkBoolean)


// 1 -> booleans -> true
// "" -> booleans -> false ("" -> empty string)
// 0 -> booleans -> false

