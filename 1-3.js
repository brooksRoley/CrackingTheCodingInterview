// 1.3 Given two strings, write a method to decide if one is a permutation of the other. pg 174

// For each character in string 1, I check if the char exists in string 2.
// If it does, remove that char from string 2 and if string 2 is empty at the end of looping through string1.
function permutation(string1, string2){
  if (string1.length !== string2.length) {
    return false;
  };
  var new_string = "";
  string2 = string2.split("");
  for (var i = 0; i < string1.length; i++) {
    var letter = string1[i];
    var index = string2.indexOf(letter);

    if (index < 0) {
      return false;
    } else{
      string2.splice(index, 1);
    };
  };
  if (string2.length == 0){
    return true;
  } else{
    return false;
  }
}

// Sort the strings and see if they are equal.
function permutation(string1, string2){
  var sort1 = string1.split("").sort();
  var sort2 = string2.split("").sort();
  if (sort1 == sort2) {
    return true;
  } else {
    return false;
  }
}


console.log(permutation("this", "that"));
console.log(permutation("pizza", "zzpia"));
console.log(permutation("cat", "tac"));
console.log(permutation("tic", "tac"));