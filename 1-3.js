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
// Note: Have to join the arrays because array comparison checks for memory location and not for value equivalence.
function permutation(string1, string2){
  var sort1 = string1.split("").sort().join("");
  var sort2 = string2.split("").sort().join("");
  if (sort1 === sort2) {
    return true;
  } else {
    return false;
  }
}


console.log(permutation("this", "that") === false);
console.log(permutation("pizza", "zzpia") === true);
console.log(permutation("cat", "tac") === true);
console.log(permutation("tic", "tac") === false);