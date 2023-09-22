import Data.List (transpose)
import Debug.Trace

snail :: [[Int]] -> [Int]
snail [] = []
snail (x : xs) = do
  trace ("x: " <> show x <> ", xs: " <> show xs) x <> snail (rotate xs)

rotate :: [[Int]] -> [[Int]]
rotate = reverse . transpose

main :: IO ()
main = do
  let array = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
  print (snail array)
