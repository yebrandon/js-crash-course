//var, let, const
//var is global
//let and const have block level scope
//let can be changed, const is constant
//always use const, unless you know you're reassigning

// Primitive data types: String, Numbers, Boolean, null, undefined
//; not required, but they're good for style

const name = "John";
const age = 30;
const rating = 4.5; //there is no int or decimal, just number
const isCool = true;
const sy = null; //console.log typeof shows object, which is wrong
const y= undefined;
let z; //undefined

console.log(typeof name);

//Concatenation
console.log('My name ' + name);

//Template String using `, can use in variables as well
console.log(`my name is ${name}`);

const s = 'hello';
console.log(s.length); // property doesn't have (), method has (), method is a function thats associated with an object

//toUpper(), toLower(), substring(), split() to split string into array

//Arrays - variables that hold multiple values
/* */

const numbers = new Array(1,2,3,2);
const fruits = ['apple', 'orange', 10, true]; // can have diff types in array

//you can change a const array, but you cant reassign one of the elements bc its const

fruits[4] = 'grapes'; //works!
fruits.push('grapes');

//unshift() adds to start, pop() takes off end, Array.isArray(), indexOf()

//Object literals - key value pairs

const person = { //this is an object
    firstName: "john",
    hobbies: ['same'],
    address:{
        text: 'help'
}
}

console.log(person.firstName, person.hobbies);

const { firstName, lastName} = person; //not assignment, its pulling stuff out fo the person object

console.log(firstName);

person.email = '' //add property

//array of objects
const todos = [
    {
        id:1,
        text: 'Take out trash'
    },
    {
        id:2,
        text: 'eat food'
    }
]

console.log(todos[1].text);

//json is a data format used with apis to send data to a server, format is similar to object literals, dont use single quotes in json

const todoJson = JSON.stringify(todos);
console.log(todoJson);

//loops

for (let i = 0; i < 10; i++)
{
    console.log(i);
}

let i = 0;
while (i<10){
    console.log(i);
    i++;
}

for(let todo of todos){
    console.log(todo);
}

//forEach, map, filter - take in function and pass in whatever variable you want

todos.forEach(function(todo){
    console.log(todo.text);
});

//map returns an array
const todoText = todos.map(function(todo){
    return todo.text;
});

console.log(todoText);

//filter only returns true todos - it filters them based on a conditional

const todoCompleted = (todos.filter(function(todo)
{
    return todo.isCompleted == true;
}))

//conditionals

const x = 10;
const meme = 10;

if (x == 10) //== just matches value, === also matches data types
{
    console.log(x);
}
else if(x > 10)
{
    console.log('10');
}
else{
    console.log('no');
}

// or ||, and &&

// ? ternary operator, used a lot to assign a variable based on a condition
// if x > 10, true go red, false go blue

const color = x > 10 ? 'red' : 'blue';

console.log(color);

//switch case

switch (color) {
    case 'red':
        console.log('red');
        break;
}

//functions

function addNums(num1 = 1, num2 = 1){ //set default to 1 and 1
    console.log(num1 + num2);
    return num1+num2;
}

addNums(5,4);
addNums(); //prints not a number

//arrow function

const addNums4 = (num1 = 1, num2 = 1) => { //same as addnums
    console.log(num1 + num2);
    return num1+num2;
}

const addNums2 = (num1 = 1, num2 = 1) => num1 + num2; //removes return and parenthessis bc only 1 expression

const addNums3 = num1 => num1+5; //only one param

todos.forEach((todo) => console.log(todo));
//lexcial this

//oop

function Person(firstName, lastName, dob) { //contructor function
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob); //date object
    this.getBirthYear = function //add a method to the object
    {
        this.dob.getFullYear(); //can access properties using this
    }
}

//Instantiate object
const person1 = new Person('John','Doe', '4-3-1980');
const person2 = new Person('John','Doe', '4-3-1980');

console.log(person1.dob.getFullYear); //print year of b

console.log(person1.getBirthYear());

//Prototypes

//so we might not need every method in every object, so we can put them in the prototype

Person.prototype.getBirthYear = function(){
    return this.dob.getBirthYear();
}

console.log(person1); //will show function in prototype

//ES6 Classes
//syntactic sugar, but does same thing as prototypes
//method is a function inside of a class or object
//looks better, does same thing as above

class Person {
    constructor(firstName, lastName, dob)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob); //date object
    }

    getBirthYear()
    {
        return this.dob.getFullYear();
    }
}

//DOM - document object model, like a tree structure of you rwhole html doc