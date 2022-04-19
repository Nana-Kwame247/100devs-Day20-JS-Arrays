// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let favoriteFood = "rice";
favoriteFood = "omo-tuo";
alert(favoriteFood);
//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)

let str = "Kwame is a bad coder";
// alert(str[1]);

//another option

alert(str.charAt(1));

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function takesThreeNumber(num1, num2, num3) {
  let product = (num1 / num2) * num3;
  alert(product);
}

takesThreeNumber(100, 10, 5);

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.

function cubeRoot(x) {
  console.log(Math.cbrt(x));
}

cubeRoot(9);
// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"

let month;

function selectMonth(a) {
  let monthLowerCase = a.toLowerCase();
  if (
    monthLowerCase === "June" ||
    monthLowerCase === "July" ||
    monthLowerCase === "August" ||
    monthLowerCase === "September"
  ) {
    alert("YAY");
  } else {
    alert("Booo");
  }
}

selectMonth("January");

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.

function skipMultiplesOf5(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 5 !== 0) {
      console.log(i);
    } else {
      // console.log(i);
    }
  }
}

skipMultiplesOf5(50);
