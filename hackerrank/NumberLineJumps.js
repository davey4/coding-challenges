// // https://www.hackerrank.com/challenges/kangaroo/problem

// You are choreographing a circus show with various animals. For one act, you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).

// The first kangaroo starts at location  and moves at a rate of  meters per jump.
// The second kangaroo starts at location  and moves at a rate of  meters per jump.
// You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. If it is possible, return YES, otherwise return NO.

// For example, kangaroo  starts at  with a jump distance  and kangaroo  starts at  with a jump distance of . After one jump, they are both at , (, ), so our answer is YES.

function kangaroo(x1, v1, x2, v2) {
  let k1 = x1;
  let k2 = x2;
  for (let i = 0; i < 10001; i++) {
    k1 += v1;
    k2 += v2;
    if (k1 === k2) {
      return "YES";
    }
  }
  return "NO";
}
