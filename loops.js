//loops: if you want to run the same code over and over again, each time with a different value then we will use loops

//for(initilization;condition; iteration){
//block of code
//}

// for (var i = 1; i < 20; i++) {
//   if (i % 2 !== 0) {
//     console.log("odd numbers");
//   } else if (i % 2 == 0) {
//     console.log("even numbers");
//   }
// }

//while loop
// while(condition){
//     //block of code
// }

// let i = 1;
// while (i < 10) {
//   if (i % 2 !== 0) console.log("odd");
//   i++;
// }

//do while loop
//do{
//block of code
//}
// while(condition)
// let i = 7;
// const n = 5;

// do...while loop from 1 to 5
// do {
//   console.log(i);
//   i++;
// } while (i <= n);

// for in
// for in object
const person = {
  name: "sowdhamini",
  age: 30,
};
console.log(person["name"]);
for (key in person) {
  console.log(key, person[key]);
}

//

// //for in arrays
// const studentNames = ["john", "raju", 5];
// for (attribute of studentNames) {
//   console.log(attribute);
// }

//break statement- it jumps out of the loop
// let i = 0;
// while (i <= 10) {
//   if (i == 5) break;
//   console.log(i);
//   i++;
// }

//continue statement -it jumps to next iteration
// let j = 0;
// while (j <= 10) {
//   if (j == 6) continue;
//   console.log(j);
//   j++;
// }
