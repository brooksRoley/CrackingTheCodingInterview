// 1.7 Write an algorithm such that if an element in an MxN matrix is 0, its entire row and column are set to 0.

// Loop through Matrix.
// If piece is 0, grab it's row and column.
// Run every element in the row to 0
// Run every element in column to 0

function convert(matrix) {
  var coordinates = [];
  for (var row = 0; row < matrix.length; row++) {
    for (var col = 0; col < matrix[row].length; col++) {
      if(matrix[row][col] === 0) {
        coordinates.push([row, col]);
      }
    };
    matrix[row]
  };
  apply_zeros(matrix, coordinates);
  console.log(matrix[0]);
  console.log(matrix[1]);
  console.log(matrix[2]);
  console.log(matrix[3]);
}

function apply_zeros(matrix, coordinates){
  for (var i = 0; i < coordinates.length; i++) {
    var row = coordinates[i][0];
    var col = coordinates[i][1];
    convert_col(matrix, col);
    convert_row(matrix[row]);
  };
}

function convert_col(matrix, i){
  for (var row = 0; row < matrix.length; row++) {
    matrix[row][i] = 0;
  }
}

function convert_row(row){
  for (var i = 0; i < row.length; i++) {
    row[i] = 0;
  };
}


var matrix = [
              [1,1,2,3],
              [1,1,2,3],
              [1,0,2,3],
              [1,1,2,3]
             ];

convert(matrix);