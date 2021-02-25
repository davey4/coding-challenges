function numKeypadSolutions(wordlist, keypads) {
  let ans = [];
  let count = 0;
  let hash = {};
  // let wordhash = {}

  keypads.forEach((pad) => {
    count = 0;
    hash = {};
    for (let i = 0; i < pad.length; i++) {
      hash[pad[i]] = 1;
    }
    console.log(hash);
    wordlist.forEach((word) => {
      // wordhash = {}
      if (word.includes(pad[0])) {
        let i = 0;
        let found = true;

        while (found && i < word.length) {
          console.log(hash[word[i]]);

          if (hash[word[i]] != 1) {
            found = false;
          }
          i++;
        }

        if (found) {
          count++;
        }
      }
    });
    ans.push(count);
  });

  console.log(ans);
  return ans;
}

const wordlist = ["hi", "hello"];
const keypads = ["ihelo", "ihoel"];
numKeypadSolutions(wordlist, keypads);

const numKeypadSolution = (wordList, keypads) => {
  const keypadHash = {};
  keypads.forEach((e, index) => {
    for (let i = 0; i < e.length; i++) {
      if (e[i] in keypadHash) {
        keypadHash[e[i]].push(index);
      } else {
        keypadHash[e[i]] = [index];
      }
    }
  });
  const results = new Array(keypads.length).fill(0);
  wordList.forEach((e) => {
    let targetKeypads = [];
    for (let i = 0; i < e.length; i++) {
      if (e[i] in keypadHash) {
        if (i === 0) {
          targetKeypads = keypadHash[e[i]];
        } else {
          const letterKeypads = keypadHash[e[i]];
          targetKeypads = targetKeypads.filter((keypad) =>
            letterKeypads.includes(keypad)
          );
        }
      } else {
        targetKeypads = [];
        break;
      }
    }
    targetKeypads.forEach((keypad) => {
      if (e.includes(keypads[keypad][0])) {
        results[keypad]++;
      }
    });
  });
  return results;
};
console.log(
  numKeypadSolution(["hi", "hello", "fred"], ["ih", "ieloh", "ehlrdfo"])
);
