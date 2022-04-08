// The if statement executes a block of code if the specified condition is true:

// Syntax

//      if (condition) {
//             //block of code
//     }

let student = 35;

if (student > 0 && student < 35) {
  console.log("failed");
} else if (student >= 35 && student < 65) {
  console.log("good");
}
if (student >= 65 && student < 100) {
  console.log("excellent");
}

//switch
// switch(expression) {
//     case x:
//       // code block
//       break;
//     case y:
//       // code block
//       break;
//     default:
//       // code block
//   }

let role = "user";
switch (role) {
  case "operator":
    console.log("operator login");
    break;
  case "admin":
    console.log("admin login");
    break;
  case "user":
    console.log("user login");
    break;
  default:
    console.log("not loggedin");
}
