-- https://codewars.com/kata/54da539698b8a2ad76000228/train/haskell

-- You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

-- Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

isValidWalk :: [Char] -> Bool
isValidWalk walk =
  let (ns, ew, steps, bool) = isValidWalk' walk (0, 0, 0, True)
   in bool && steps == 10 && ew == 0 && ns == 0

isValidWalk' :: [Char] -> (Int, Int, Int, Bool) -> (Int, Int, Int, Bool)
isValidWalk' dir (ns, ew, n, bool) =
  if n > 10
    then (ns, ew, succ n, bool)
    else case dir of
      [] -> (ns, ew, n, True)
      [x] -> calculateSteps x
      (x : xs) -> isValidWalk' xs $ calculateSteps x
 where
  calculateSteps :: Char -> (Int, Int, Int, Bool)
  calculateSteps x =
    case x of
      'n' -> (succ ns, ew, succ n, True)
      's' -> (pred ns, ew, succ n, True)
      'e' -> (ns, succ ew, succ n, True)
      'w' -> (ns, pred ew, succ n, True)
      _ -> (ns, ew, succ n, False)
