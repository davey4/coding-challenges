// // https://www.hackerrank.com/challenges/equality-in-a-array/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign

// Given an array of integers, determine the minimum number of elements to delete to leave only elements of equal value.

// Example

// Delete the  elements  and  leaving . If both twos plus either the  or the  are deleted, it takes  deletions to leave either  or . The minimum number of deletions is .

// Function Description

// Complete the equalizeArray function in the editor below.

// equalizeArray has the following parameter(s):

// int arr[n]: an array of integers
// Returns

// int: the minimum number of deletions required

function equalizeArray(arr) {
  let deletions = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    count = 0;
    for (let k = 0; k < arr.length; k++) {
      if (arr[i] !== arr[k]) {
        count++;
      }
    }
    if (i === 0) {
      deletions = count;
    } else if (count < deletions) {
      deletions = count;
    }
  }
  return deletions;
}
