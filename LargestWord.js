function findLongestWord(str) {
  let splitword = str.split(" ");
  let longestWord = 0;
  for (var i = 0; i < splitword.length; i++){
    if(splitword[i].length > longestWord){
      longestWord = splitword[i].length;
    }
  }
  return longestWord;
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
console.log(findLongestWord("Welcome to Asia Developer Academy"));