const name = "Hello"
const repoCount = 1294

//console.log(name +" " + repoCount +" By HSK!")

console.log(`${name}, My Name : HSK`) 

/*
    to add two variable or anything we use `any name ${variable name} anything`;
*/


const gameName = new String('GTA-VI')
console.log(gameName[0])// to check stored data at index 0.
console.log(gameName.__proto__) //__proto__ : type of data that is

//to check length of string we use length:

console.log(gameName.length)

//to convert given string to Upper Case we use : toUpperCase();

console.log(gameName.toUpperCase());

// to check index based character we use : charAt(index);

console.log(gameName.charAt(5))

// to check given string in which index stored we use : indexOf('t');

console.log(gameName.indexOf('V'));


//to divide given string into sub string we use .substring(start,end)

const newString = gameName.substring(0,4);

console.log(newString)


//to give string position from negative value we use : .slice(post, end pos)

const anotherString = gameName.slice(-8,4);

console.log(anotherString)
const newStringOne = "   Ganesh   "

//to trim given spaces or unusual spaces in string we use: .trim(); works in whitespace only!

console.log(newStringOne)
console.log(newStringOne.trim())

// to replace given string or specific character , special character we use : variableName.replace('character', 'replaceChar')
const url = "https://algorythms.com/loophole%20hackathon"

console.log(url.replace('%20','-'));

// to ask something present or not in that string we use: .include('keyword')

console.log(url.includes('loophole'))

// to check or split string into that string type variable we use : .split('character')

const name2 = "Hello-my-name-is-hsk"
console.log(name2.split('-'))
