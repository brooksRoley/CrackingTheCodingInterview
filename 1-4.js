
// function string_replace(string){
//   return string.replace(" ", "%20")
// }

function string_replace(string){
  string = string.split("");
  for (var i=0; i < string.length; i++) {
   if (string[i] == " "){
    string[i] = "%20";
   }
  };
  return string.join("");
}

console.log(string_replace("Mr John Smith") === "Mr%20John%20Smith");