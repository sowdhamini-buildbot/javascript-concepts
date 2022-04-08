//logical operators -- && ,  ||  ,  !

let studentMarks = true;
let studentAttendence = true;
let student = studentMarks && studentAttendence;
console.log(student);

let customerOrder = false;
let customerReview = false;
let customer = customerOrder || customerReview;
console.log(customer);

let isSwithIsOn = false;

if (isSwithIsOn === false) {
  isSwithIsOn = true;
} else if (isSwithIsOn === true) {
  isSwithIsOn = false;
}

isSwithIsOn = !isSwithIsOn;
