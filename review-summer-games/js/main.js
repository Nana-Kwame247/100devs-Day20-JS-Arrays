//Create a function that takes in an array of numbers. Multiply each number together and alert the product.

function multiplyEachOther(num) {
  let multiply = 1;
  for (let i = 0; i < num.length; i++) {
    multiply = multiply * num[i];
    console.log(multiply);
  }
}

multiplyEachOther([1, 2, 3, 4, 5, 6]);

//Leon's solution

function multiNumInArr(arr) {
  let product = 1;
  arr.forEach((num) => (product *= num));
}
