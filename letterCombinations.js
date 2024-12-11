export function letterCombinations(digits) {
  if (!digits.length) return [];

  const digitToLetters = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  let result = [];

  function backtrack(index, path) {
    if (index === digits.length) {
      result.push(path);
      return;
    }

    let letters = digitToLetters[digits[index]];
    for (let letter of letters) {
      backtrack(index + 1, path + letter);
    }
  }

  backtrack(0, "");

  for (let i = 1; i < result.length; i++) {
    let key = result[i];
    let j = i - 1;
    while (j >= 0 && result[j] > key) {
      result[j + 1] = result[j];
      j--;
    }
    result[j + 1] = key;
  }

  return result;
}
