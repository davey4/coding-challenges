// // https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign

// Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, and she begins counting from there.

// For example, assume her scores for the season are represented in the array . Scores are in the same order as the games played. She would tabulate her results as follows:

//                                  Count
// Game  Score  Minimum  Maximum   Min Max
//  0      12     12       12       0   0
//  1      24     12       24       0   1
//  2      10     10       24       1   1
//  3      24     10       24       1   1
// Given the scores for a season, find and print the number of times Maria breaks her records for most and least points scored during the season.

// Function Description

// Complete the breakingRecords function in the editor below. It must return an integer array containing the numbers of times she broke her records. Index  is for breaking most points records, and index  is for breaking least points records.

// breakingRecords has the following parameter(s):

// scores: an array of integers
// Input Format

// The first line contains an integer , the number of games.
// The second line contains  space-separated integers describing the respective values of .

function breakingRecords(scores) {
  let highest = scores[0];
  let lowest = scores[0];
  let highCount = 0;
  let lowCount = 0;

  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > highest) {
      highest = scores[i];
      highCount++;
    } else if (scores[i] < lowest) {
      lowest = scores[i];
      lowCount++;
    }
  }

  return [highCount, lowCount];
}
