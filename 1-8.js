// 1.8 Assume you have a method isSubstring which checks if one word is a substring of another. Given two strings, s i and s2, write code to check if s2 is a rotation of si using only one call to isSubstring (e.g.,"waterbottle"is a rota- tion of "erbottlewat").
// Additional Questions: Bit Manipulation (#5.7), Object-Oriented Design (#8.10), Recursion (#93), Sorting and Searching (#11.6), C++ (#13.10), Moderate (#17.7, #17.8, #17.14)

function isSubstring(str1, str2){
  return str1.indexOf(str2) > -1;
}
//Need a few calls to check whether my function for isSubstring works as intended.
// console.log(isSubstring("foo", "oo";
// console.log(isSubstring("oo", "foo"));

// // Initial Solution.
// function isRotation(str1, str2){
//   // Find the pivot point for string1
//   // Do the two halves === string 2?  if (str1.length !== str2.length) {
//     return false;
//   };
//   var temp = str1[0];
//   var index=1;
//   while(str2.indexOf(temp)>0){
//     temp += str1[index];
//     index++;
//   }
//   index--;
//   var first_half = str1.slice(index, str1.length);
//   var second_half = str1.slice(0, index);
//   return str2 === first_half + second_half;
// }

function isRotation(str1, str2){
  var len = str1.length;
  if (len === str2.length && len>0) {
    var temp = str1+str1;
    return isSubstring(temp, str2);
  };
  return false;
}

console.log(isRotation("waterbottle", "erbottlewat") === true);
console.log(isRotation("strings", "ingsstr") === true);
console.log(isRotation("strings", "insgstr") === false);
