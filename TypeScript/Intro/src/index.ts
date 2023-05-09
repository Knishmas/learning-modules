//-------------------------------------------------
//Types

// let sales: number = 123_456_789;
// let course: string = 'TypeScript'; 
// let is_published: boolean = true;

//Typescript can infer the values of the variables so we don't have to annotate

let sales = 123_456_789;
let course = 'TypeScript'; 
let is_published = true;

//assumes type any if we don't specify
let level;
//We can re-assign value types with type any 
level = 1; 
level = 'a';

//This goes against what typescript is meant for so we avoid type any when we can

//infers document has type any 

// function render(document) {
//     console.log(document);
// }

//infers document has type any 
function render(document: any) {
    console.log(document);
}

//-------------------------------------------------
//Arrays 

//Javascript allows for dynamic types within arrays
// let numbers = [1,2,'3']; 

//In typescript we can do strict type checking with arrays like so: 

let numbers: number[] = [1,2,3]

// or infer like so 

let numbersInfer = [1,2,3];

//if you want an empty array you have to specify it's type through annotation or it's assumed type any

let numbersEmpty: number [] = [];

//Have properties and methods of, in this case, number objects offered as code completion: 
    // numbersEmpty.forEach(n => n.)

//-------------------------------------------------
/*Tuples
fixed length array where each element has a particular type, often used with pair of values.
Note: Tuples should usually be limited to 2 values or else the code can become confusing.
Example:
id, name  */

let user: [number, string] = [1, 'Mosh']; 
/*methods for numbers objects using tuples  
    user[0].
and for strings: 
    user[1].
methods for array objects: 
    user.
    */

//-------------------------------------------------
/*Enums
represents a list of related constants
*/

//Example representing the size of T shirts as constants
const small = 1; 
const medium = 2;
const large = 3; 

// OR can do this through enum 
/* 
By default these are numbered: 0,1,2....
enum Size {Small, Medium, Large}


Or you can explicitly set the starting value: 
    enum Size {Small = 1, Medium, Large}
Medium becomes 2, large becomes 3 etc.  


String values are also allowed, every a value must be explicitly declared for each member 
    enum Size {Small = 's', Medium = 'm', Large = 'l'}
    */ 

//If we define our enums then using the const keyword, then the compiler will generate more optimized code that isn't verbose

const enum Size{Small = 1, Medium = 2, Large}; 
let mySize: Size = Size.Medium;
console.log(mySize);

//-------------------------------------------------
/*Functions
Explicitly decalring parameter type and return type 
*/
function calculateTax(income: number, taxYear: number): number  {
    if(taxYear < 2022)
        return income * 1.2; 
    return income * 1.3;
}
//Typescript is stric about the # of parameters. In this case you must have 2 nore more and no less. 
calculateTax(10_000, 2022)

//
/*
We don't have to supply both parameters, we can set taxYear as default

function calculateTax(income: number, taxYear = 2022): number  {
    if(taxYear < 2022)
        return income * 1.2; 
    return income * 1.3;
}
calculateTax(10_000)
*/