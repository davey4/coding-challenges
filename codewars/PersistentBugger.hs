-- https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/haskell

-- Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

-- For example (Input --> Output):

-- 39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
-- 999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
-- 4 --> 0 (because 4 is already a one-digit number)

persistence :: Int -> Int
persistence n =
    let
        x = toList n
    in
    case length x of
        1 -> 0
        _ -> persistence' x 1

persistence' :: [Int] -> Int -> Int
persistence' digits i =
    let
        x = product digits
        l = toList x
    in
    case length l of
        1 -> i
        _ -> persistence' l (succ i)

toList :: Int -> [Int]
toList x
    | x < 10 = [x]
    | otherwise = toList (div x 10) ++ [mod x 10]