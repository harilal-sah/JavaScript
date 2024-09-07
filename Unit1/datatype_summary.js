// Types Of Datatypes:

/* 
    1. Primitive Datatypes
    2. Non-Primitive Datatypes

    1.Primitive Datatypes are of 7 types:
        i. String
        ii. Number
        iii. Boolean
        iv. null
        v. undefined
        vi. Symbol
        vii. BigInt


    2. Reference(Non-Primitive):
        i. Array
        ii. Objects
        iii. Functions

    Is that javaScript a static or dynamic type language?

 */ //for examples:

 const score = 100
 const scoreValue = 100.3

 const isLoggedIn = false
 const outsideTemp = null
 let userEmail;

 const id = Symbol('123')
 const anotherId = Symbol('123')

 console.log(id == anotherId);

 const bigNumber = 34567891239552n


 // non - primitive types example:

 const heros = ["Thor", "Iron Man", "Dr Strange"];

 let myObj = {
    naem : "Hari",
    age : 22,
 }

 const myFunction = function(){ //datatype : function object
    console.log('Hello World');
 }

 console.log(typeof myFunction);