function contiguous(array){
    var size = array.length;
    var max_ending_here = max_so_far = parseInt(array[0]);
        console.log("max ending here: " +  max_ending_here);
        console.log("max so far: " + max_so_far);

    for(var i=1; i<size; i++){
      var x = parseInt(array[i]);
      max_ending_here = Math.max(x, max_ending_here + x);
      max_so_far =  Math.max(max_so_far, max_ending_here);
        console.log("x: " + x);
        console.log("max ending here: " +  max_ending_here);
        console.log("max so far: " + max_so_far);
    }
    return max_so_far;
}

function non_contiguous(array){
    var sum = parseInt(array[0]);
    var digit;
    for(var i=1; i<array.length; i++){
        digit = parseInt(array[i]);
        if (sum>0) {
          if (digit>0) {
            sum +=digit
          };
        } else{
          sum = Math.max(sum, digit);
        }
    }
    return sum;
}

function processData(input) {
    input = input.split("\n");
    var n = input.shift();
    for(var i=0; i<input.length; i+=2){
        var size = input[i];
        var numbers = input[i+1];
        numbers = numbers.split(" ");
        console.log(contiguous(numbers) + " " + non_contiguous(numbers));
    }
}

var fs = require('fs');
require.extensions['.txt'] = function (module, filename) {
    module.exports = fs.readFileSync(filename, 'utf8');
};
// var input = require('./input.txt');
var input = require('./input2.txt');
processData(input);