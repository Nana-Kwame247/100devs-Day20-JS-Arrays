//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

// function everyEvenNumber(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       console.log(arr);
//     }
//   }
// }

// everyEvenNumber([2, 3, 4, 6, 7, 9, 10]);

function onlyEven(nums) {
  let evens = [];
  nums.forEach((n) => {
    if (n % 2 === 0) {
      evens.push(n);
    }
  });
  // console.log(evens);
  return evens;
}
console.log(onlyEven([1, 2, 3, 4, 5, 6]));
