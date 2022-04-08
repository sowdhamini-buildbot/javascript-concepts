//primitive types- string,number,boolean,undefined,null
//reference types - functions,objects,arrays

//primitive types

//string- A sequence of characters
// let name = "sowdhamini";

// //numbers - represents numeric values
// let age = 30;

// //Boolean-returns either true or false
// let valueisChecked = true;

// //undefined-not having any value
// let color;

// // null - represents undefined value
// let selectedColor = null;

//reference types

//objects:

//syntax for object
// var objectName ={
//     key:value---key and value called as property
// }
// let person = ["sowdhamini", 25];
// console.log(typeof person);

// var person = {
//   name: "sowdhamini",
//   age: 24,
// };
// //To access the property - Dot Notation
// let employeeDetails = {
//   name: "sowdhamini",
//   age: 30,
// };

// console.log(employeeDetails.name);

// //syntax for arrays
// // const array_name = [item1, item2, ...];

// var slectedColors = ["blue", "green", "red"];
// document.write(slectedColors[0]);

// //length : length property returns the number of items or element in array
// document.write(slectedColors.length);

// //function : a function is a set of statements that performs a  task or calulates a value
// //function functionname(parameters){
// //body of function
// //}
// //calling function(arguments)

// //parameter - parameter is at the time of declaration
// //arguments - arguments is a value to that parameter

// function hello() {
//   alert("hello");
// }

function greet(name, lastname) {
  console.log("hello" + " " + lastname);
  let lname = lastname;
  let rename = name + lastname;
  console.log(rename);
  return lname;
}
let newName = greet("john", "smith");
console.log(newName);

// function square(number) {
//   number = 21; //axios.get('url').then(response => {
//   // console.log(response.data.sundeep.age)
//   // })
//   // data:{
//   //   sundeep: {
//   //     age: 21
//   //   },
//   //   lokesh: {
//   //     age: 30
//   //   }
//   // }
//   return number;
// }
// // console.log(square(6));
// var age = square(6);
// if (age == 21) {
//   console.log("still young");
// } else {
//   console.log("you are old");
// }
