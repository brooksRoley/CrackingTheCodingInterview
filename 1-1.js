function has_unique_chars(word) {
  var frequency = {}
  // Size of ascii alphabet.
  if (word.length > 256) {
    return false;
  };
  for (var i =0; i<word.length; i++) {
    if (frequency[word[i]] == undefined){
      frequency[word[i]] = 1;
    } else {
      frequency[word[i]] += 1;
    }
    if(frequency[word[i]] > 1){
      return false;
    }
  }
  return true;
}

console.log("'this' has unique characters: " + has_unique_chars("this"));
console.log("'that' has unique characters: " + has_unique_chars("that"));
console.log("'otherss' has unique characters: " + has_unique_chars("otherss"));
console.log("'pizza' has unique characters: " + has_unique_chars("pizza"));
