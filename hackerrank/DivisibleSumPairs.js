// // https://www.hackerrank.com/challenges/divisible-sum-pairs/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign

// Given an array of integers and a positive integer , determine the number of  pairs where  and  +  is divisible by .

// Example

// Three pairs meet the criteria:  and .

// Function Description

// Complete the divisibleSumPairs function in the editor below.

// divisibleSumPairs has the following parameter(s):

// int n: the length of array
// int ar[n]: an array of integers
// int k: the integer divisor
// Returns
// - int: the number of pairs

function divisibleSumPairs(n, k, ar) {
  let ans = 0;

  for (let i = 0; i < ar.length; i++) {
    for (let j = i + 1; j < ar.length; j++) {
      if ((ar[i] + ar[j]) % k === 0) {
        console.log(ar[i], ar[k]);
        ans++;
      }
    }
  }
  return ans;
}
