const str = process.argv[2];

const isPalindrome = (str) => {
  return str.split("").reverse().join("") === str;
};

console.log(isPalindrome(str));