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

console.log(has_unique_chars("this"));
console.log(has_unique_chars("that"));
console.log(has_unique_chars("otherss"));
console.log(has_unique_chars("pizza"));
