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