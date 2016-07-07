// 1.2 Implement a function void reverse(char* str) in C or C++ which reverses a null- terminated string. pg 173

function string_reverse(string){
  var new_string = "";
  for(var i=string.length-1; i>=0; i--){
    new_string += string[i];
  }
  console.log(new_string);
}


string_reverse("this");
string_reverse("that");
string_reverse("other");
string_reverse("pizza");
