// 1.6 Given an image represented by an NxN matrix, where each pixel in the image is 4 bytes, write a method to rotate the image by 90 degrees. Can you do this in place?  pg 179

function rotateMatrix(matrix){
  var output = [];
  var n = matrix.length
  for (var i=0; i < n; i++) {
    output[i] = new Array(4);
    console.log(output);
    for (var j=0; j < n; j++) {
      console.log(output[j]);
       // output[j][n-i-1] = matrix[i][j];
     };
  };

}


var arr = [
            [1,2,3],
            [4,5,6],
            [7,8,9]
          ]

console.log(rotateMatrix(arr));