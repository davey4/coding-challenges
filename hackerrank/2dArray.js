// // https://www.hackerrank.com/challenges/2d-array/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

// Complete the function hourglassSum in the editor below.

// hourglassSum has the following parameter(s):

// int arr[6][6]: an array of integers
// Returns

// int: the maximum hourglass sum

function hourglassSum(arr) {
  let highestSum = 0;
  let sum = 0;

  for (let i = 0; i < arr.length - 2; i++) {
    for (let k = 0; k < arr[i].length - 2; k++) {
      sum =
        arr[i][k] +
        arr[i][k + 1] +
        arr[i][k + 2] +
        arr[i + 1][k + 1] +
        arr[i + 2][k] +
        arr[i + 2][k + 1] +
        arr[i + 2][k + 2];
      if (i === 0) {
        highestSum = sum;
      } else if (sum > highestSum) {
        highestSum = sum;
      }
    }
  }
  return highestSum;
}
