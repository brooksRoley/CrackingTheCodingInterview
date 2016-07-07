// 1.8 Assume you have a method isSubstring which checks if one word is a substring of another. Given two strings, s i and s2, write code to check if s2 is a rotation of si using only one call to isSubstring (e.g.,"waterbottle"is a rota- tion of "erbottlewat").
// Additional Questions: Bit Manipulation (#5.7), Object-Oriented Design (#8.10), Recursion (#93), Sorting and Searching (#11.6), C++ (#13.10), Moderate (#17.7, #17.8, #17.14)


function isSubstring(str1, str2){
  return str1.indexOf(str2) > -1;
}
//Need a few calls to check whether my function for isSubstring works as intended.
// console.log(isSubstring("foo", "oo";
// console.log(isSubstring("oo", "foo"));

function isRotation(str1, str2){

// // Solution after 1 hour.
  // if (str1.length !== str2.length) {
  //   return false;
  // };

  // var temp = str2;
  // var index = temp.indexOf(str1[0]);
  // var index2 = temp.indexOf(str1[1]);
  // if(index < 0){
  //   return false;
  // } else if(index !== index2-1 || index === str1.length){

  // } else{
  //   var first_half = str2.slice(index, str2.length);
  //   var second_half = str2.slice(0, index);
  //   console.log(first_half);
  //   console.log(second_half);
  //   if (isSubstring(str1,first_half) && isSubstring(str1,second_half)) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  // Find Pivot point gives you x, and y.
  // xyxy. is str2 substring?


}
// console.log(isRotation("waterbottle", "erbottlewat") === true);
console.log(isRotation("strings", "ingsstr") === false);
console.log(isRotation("strings", "ingsstr") === true);
