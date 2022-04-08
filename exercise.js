// Function isLandscape, it takes two parameters, width, and height of an image, and returns true
// if the image is landscape, which means width is greater than height, otherwise it returns false.

function isLandscape(width, height) {
  if (width > height) {
    console.log("true");
  } else {
    console.log("false");
  }
}
isLandscape(800, 900);

//divisible by 3 fizz
//divisible by 5 buzz
//divisible by 3 and 5 fizzbuzz
for (i = 0; i <= 20; i++) {
  if (i % 3 == 0) {
    console.log("fizzz");
  }
  if (i % 5 == 0) {
    console.log("buzzzz");
  }
}
