// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".

function takeAnArray(x) {
  // for (let i = 0; i < x.length; i++) {
  // console.log(x[i]);
  if (x[0] < x[x.length - 1]) {
    alert(`Hi`);
  } else if (x[0] > x[x.length - 1]) {
    alert(`Bye`);
  } else {
    alert(`We close in an hour`);
  }
  //}
}

takeAnArray([1, 2, 3, 4, 5, 6]);
takeAnArray([100, 2, 3, 4, 5, 6]);
takeAnArray([6, 2, 3, 4, 5, 6]);

// solving the same problem with ForEach

// lessThanLastNumber.forEach((x) => {
//   if (x[0] < x[x.length - 1]) {
//     alert(`Hi`);
//   } else if (x[0] > x[x.length - 1]) {
//     alert(`Bye`);
//   } else {
//     alert(`We close in an hour`);
//   }
// });

// lessThanLastNumber([1, 2, 3, 4, 5, 6, 7]);
