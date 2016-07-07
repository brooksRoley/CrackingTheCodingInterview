// 1.5 Implement a method to perform basic string compression using the counts of repeated characters. For example, the string aabcccccaaa would become a2blc5a3. If the "compressed" string would not become smaller than the orig- inal string, your method should return the original string.pg176

// for each letter,
//   if that letter === the letter,
//     increment counter for letter,
//   else
//     delete letters after the 1st instance
//     append the count

function string_compression(string) {
  var string = string.split(""),
      letter = string[0],
      count = 1,
      output = "";

  for (var i = 1; i < string.length; i++) {
    if (string[i] === letter) {
      count++;
    }
    if(string[i] !== letter || i === string.length-1){
      output += letter;
      output += count;
      letter = string[i];
      count = 1;
    }
  };
  string = string.join("");
  console.log(output);
}

string_compression("aabcccccaaa");
console.log("a2blc5a3");