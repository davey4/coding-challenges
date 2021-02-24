// // https://www.hackerrank.com/challenges/sock-merchant/problem

// There is a large pile of socks that must be paired by color. Given an array of integers representing the color of each sock, determine how many pairs of socks with matching colors there are.

// Example

// There is one pair of color  and one of color . There are three odd socks left, one of each color. The number of pairs is .

// Function Description

// Complete the sockMerchant function in the editor below.

// sockMerchant has the following parameter(s):

// int n: the number of socks in the pile
// int ar[n]: the colors of each sock
// Returns

// int: the number of pairs

function sockMerchant(n, ar) {
  let pairs = 0;
  let count = 1;
  for (let i = 0; i < ar.length; i = 0) {
    count = 1;
    for (let k = i + 1; k < ar.length; k++) {
      if (ar[i] === ar[k]) {
        count++;
        ar.splice(k, 1);
        k -= 1;
      }
    }
    pairs += Math.floor(count / 2);
    ar.splice(i, 1);
  }
  return pairs;
}
