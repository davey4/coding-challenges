// // https://www.hackerrank.com/challenges/apple-and-orange/problem

// Sam's house has an apple tree and an orange tree that yield an abundance of fruit. Using the information given below, determine the number of apples and oranges that land on Sam's house.

// In the diagram below:

// The red region denotes the house, where  is the start point, and  is the endpoint. The apple tree is to the left of the house, and the orange tree is to its right.
// Assume the trees are located on a single point, where the apple tree is at point , and the orange tree is at point .
// When a fruit falls from its tree, it lands  units of distance from its tree of origin along the -axis. *A negative value of  means the fruit fell  units to the tree's left, and a positive value of  means it falls  units to the tree's right. *

function countApplesAndOranges(s, t, a, b, apples, oranges) {
  let applesInHouse = 0;
  let orangesInHouse = 0;
  const appleLanding = [];
  const orangeLanding = [];
  apples.forEach((el) => appleLanding.push(el + a));
  oranges.forEach((el) => orangeLanding.push(el + b));

  appleLanding.forEach((el) => {
    if (el >= s && el <= t) {
      applesInHouse++;
    }
  });
  orangeLanding.forEach((el) => {
    if (el >= s && el <= t) {
      orangesInHouse++;
    }
  });

  console.log(applesInHouse);
  console.log(orangesInHouse);
}
