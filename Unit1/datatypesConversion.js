//JavaScript Datatypes Conversion:

let score = false;

console.log(typeof score)
console.log(typeof(score))

let valueInNumber = Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber) 
//if NaN then it means "Not a Number"


// when we are converting 33 string to 33 number easily it can be converted 


// but when we are trying to convert that "33abc" to string it gives -> NaN (Not a Number)

let isLoggedIn = 0

let checkBoolean = Boolean(isLoggedIn)

console.log(checkBoolean)


// 1 -> booleans -> true
// "" -> booleans -> false ("" -> empty string)
// 0 -> booleans -> false



// ********************* OPerations *****************

let value = 3

let negValue = -value

console.log(negValue);

let str1 = "Hello"
let str2 = " Coders!"

console.log(str1 + str2)

console.log("1" + 2)
console.log(1 + "2")
console.log("1" + 2 + 3)
console.log(1 + 2 + "3")

//if string is first in printing then remaining all behaved as string only as given in no 47.

//assignment operations:

let num1, num2, num3

num1 = num2 = num3 = 2 + 2
console.log(num1,num2,num2)  // all having the value 4

let gameCounter = 100
gameCounter++;
console.log(gameCounter)