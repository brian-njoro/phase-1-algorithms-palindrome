function isPalindrome(word) {
  const newWord = word.toLowerCase()
  const invertedWord = newWord.split(``).reverse().join(``)
  if(invertedWord === newWord) {
    return `true`
  } else {
    return `false`
  }
}

/* 
  create a function isPalindrome that takes a string
    convert the string to lowercase
    split the string into individual letters, reverse the letters and join back together
      check whether the strings match
      if match return true, and if not return false


*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  console.log(isPalindrome(`high`))
  console.log(isPalindrome(`madam`))
}

module.exports = isPalindrome;
