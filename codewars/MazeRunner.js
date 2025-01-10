// https://www.codewars.com/kata/58663693b359c4a6560001d6/train/javascript

// Introduction
// Welcome Adventurer. Your aim is to navigate the maze and reach the finish point without touching any walls. Doing so will kill you instantly!
// Task
// You will be given a 2D array of the maze and an array of directions. Your task is to follow the directions given. If you reach the end point before all your moves have gone, you should return Finish. If you hit any walls or go outside the maze border, you should return Dead. If you find yourself still in the maze after using all the moves, you should return Lost.
// The Maze array will look like

// maze = [[1,1,1,1,1,1,1],
//         [1,0,0,0,0,0,3],
//         [1,0,1,0,1,0,1],
//         [0,0,1,0,0,0,1],
//         [1,0,1,0,1,0,1],
//         [1,0,0,0,0,0,1],
//         [1,2,1,0,1,0,1]]
// ..with the following key

//       0 = Safe place to walk
//       1 = Wall
//       2 = Start Point
//       3 = Finish Point
//   direction = ["N","N","N","N","N","E","E","E","E","E"] == "Finish"
// Rules
// 1. The Maze array will always be square i.e. N x N but its size and content will alter from test to test.

// 2. The start and finish positions will change for the final tests.

// 3. The directions array will always be in upper case and will be in the format of N = North, E = East, W = West and S = South.

// 4. If you reach the end point before all your moves have gone, you should return Finish.

// 5. If you hit any walls or go outside the maze border, you should return Dead.

// 6. If you find yourself still in the maze after using all the moves, you should return Lost.
// Good luck, and stay safe!

function navigateMaze(maze, directions) {
  // Find the start position (value '2')
  let startX, startY;
  for (let i = 0; i < maze.length; i++) {
    for (let j = 0; j < maze[i].length; j++) {
      if (maze[i][j] === 2) {
        startX = i;
        startY = j;
        break;
      }
    }
    if (startX !== undefined) break;
  }

  // Direction movement mapping (N, E, S, W)
  const moveMap = {
    "N": [-1, 0],  // North (up)
    "E": [0, 1],   // East (right)
    "S": [1, 0],   // South (down)
    "W": [0, -1]   // West (left)
  };

  // Current position
  let x = startX;
  let y = startY;

  // Iterate through the directions
  for (let d of directions) {
    const [dx, dy] = moveMap[d];
    x += dx;
    y += dy;

    // Check if out of bounds
    if (x < 0 || x >= maze.length || y < 0 || y >= maze[0].length) {
      return "Dead";
    }

    // Check if we hit a wall
    if (maze[x][y] === 1) {
      return "Dead";
    }

    // Check if we've reached the finish point
    if (maze[x][y] === 3) {
      return "Finish";
    }
  }

  // If no finish point and all moves are used
  return "Lost";
}

