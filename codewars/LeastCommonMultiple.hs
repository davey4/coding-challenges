-- https://www.codewars.com/kata/5259acb16021e9d8a60010af/train/haskell

-- Write a function that calculates the least common multiple of its arguments; each argument is assumed to 
-- be a non-negative integer. In the case that there are no arguments (or the provided array in compiled 
-- languages is empty), return 1. If any argument is 0, return 0.

import Prelude hiding (lcm)

lcm :: Integral a => [a] -> a
lcm xs = case xs of
    [] -> 1
    (y:ys) -> if y == 0 then 0 else let z = lcm xs in y * z `quot` gcd y z