function isPalindrome(word) {
  // Write your algorithm here
  let newWord = word.toLowerCase();
  let newWordRevevse = newWord.split("").reverse().join("");
  return newWord === newWordRevevse;
}

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
