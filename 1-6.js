// 1.6 Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees. Can you do this in place?  pg 179

function rotateMatrix(matrix){
  var output = [];
  var n = matrix.length
  // // This initial solution takes O(N) memory. Think I can do it better.
  // for (var i=0; i < n; i++) {
  //   var temp = [];
  //   for (var j = n-1; j >= 0; j--) {
  //     temp.push(matrix[j][i]);
  //   };
  //   output.push(temp);
  // };
  return output;
}


var arr = [
            [1,2,3],
            [4,5,6],
            [7,8,9]
          ]
var rotated = [
                [7,4,1],
                [8,5,2],
                [9,6,3]
              ]

// console.log(rotateMatrix(arr) );
console.log(rotateMatrix(rotated));
