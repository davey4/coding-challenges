-- https://www.codewars.com/kata/51fc12de24a9d8cb0e000001/train/haskell

-- ISBN-10 identifiers are ten digits long. The first nine characters are digits 0-9. The last digit can be 0-9 or X, to indicate a value of 10.

-- An ISBN-10 number is valid if the sum of the digits multiplied by their position modulo 11 equals zero.

-- For example:

-- ISBN     : 1 1 1 2 2 2 3 3 3  9
-- position : 1 2 3 4 5 6 7 8 9 10
-- This is a valid ISBN, because:

-- (1*1 + 1*2 + 1*3 + 2*4 + 2*5 + 2*6 + 3*7 + 3*8 + 3*9 + 9*10) % 11 = 0
-- Examples
-- 1112223339   -->  true
-- 111222333    -->  false
-- 1112223339X  -->  false
-- 1234554321   -->  true
-- 1234512345   -->  false
-- 048665088X   -->  true
-- X123456788   -->  false
import qualified Data.Char as Char
import qualified Data.List as List

validISBN10 :: String -> Bool
validISBN10 str
  | length str /= 10 = False
  | not (all isDigit' str) = False
  | "X" `List.isInfixOf` take 9 str = False
  | otherwise = checkMod str

checkMod :: [Char] -> Bool
checkMod = (== 0) . (`mod` 11) . sum . zipWith (*) [1 ..10] . map digitToInt'

digitToInt' :: Char -> Int
digitToInt' x
  | x == 'X' = 10
  | otherwise = Char.digitToInt x

isDigit' :: Char -> Bool
isDigit' x
  | x == 'X' = True
  | otherwise = Char.isDigit x


