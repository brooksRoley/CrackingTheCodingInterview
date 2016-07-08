// 1.2 Implement a function void reverse(char* str) in C or C++ which reverses a null- terminated string. pg 173

function string_reverse(string){
  var new_string = "";
  for(var i=string.length-1; i>=0; i--){
    new_string += string[i];
  }
  console.log(new_string);
}


console.log("The reversed string of 'this' is: ");
string_reverse("this");
console.log("The reversed string of 'that' is: ");
string_reverse("that");
console.log("The reversed string of 'other' is: ");
string_reverse("other");
console.log("The reversed string of 'pizza' is: ");
string_reverse("pizza");
