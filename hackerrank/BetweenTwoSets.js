// // https://www.hackerrank.com/challenges/between-two-sets/problem

// There will be two arrays of integers. Determine all integers that satisfy the following two conditions:

// The elements of the first array are all factors of the integer being considered
// The integer being considered is a factor of all elements of the second array
// These numbers are referred to as being between the two arrays. Determine how many such numbers exist.

// Example

// There are two numbers between the arrays:  and .
// , ,  and  for the first value.
// ,  and ,  for the second value. Return .

// Function Description

// Complete the getTotalX function in the editor below. It should return the number of integers that are betwen the sets.

// getTotalX has the following parameter(s):

// int a[n]: an array of integers
// int b[m]: an array of integers
// Returns

// int: the number of integers that are between the sets

function getTotalX(a, b) {
  // Write your code here
  let ans = 0;
  let arr = [];
  let subArr = [];
  for (let i = a[a.length - 1]; i <= b[0]; i++) {
    subArr = [];
    a.forEach((el) => {
      if (i % el === 0) {
        subArr.push(i);
      }
    });
    if (subArr.length === a.length) {
      arr.push(i);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    subArr = [];
    b.forEach((el) => {
      if (el % arr[i] === 0) {
        subArr.push(arr[i]);
      }
    });
    if (subArr.length === b.length) {
      ans++;
    }
  }

  return ans;
}
