const palindromes = function (str) {
  let arrayStr = str.split("").reverse().join("");
  if (arrayStr.toLowerCase === str.toLowerCase) {
    return true;
  } else {
    false;
  }
};

// Do not edit below this line
module.exports = palindromes;
