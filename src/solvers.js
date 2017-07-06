/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other
window.findSolution = function(row, n, board, callback, validator) {
  // base case
  if (row === n) {
    // invoke the callback
    callback();
    //stop
    return;
  }
  // increment the row
  for (var i = 0; i < n; i++) {
    // toggle on first peice
    board.togglePiece(row, i);
    if (!board[validator]()) {
      findSolution(row + 1, n, board, callback, validator); 
    }
    board.togglePiece(row, i);
  }
  
};

window.findNRooksSolution = function(n) {
  var validator = 'hasAnyRooksConflicts';
  var solution;
  var board = new Board({n: n});
  var callback = function() {
    // solution = board.rows();
    solution = _.map(board.rows(), function(row) {
      return row.slice();
    });
  };
  findSolution(0, n, board, callback, validator);
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var validator = 'hasAnyRooksConflicts';
  var solutionCount = 0;
  var board = new Board({n:n});
  var callback = function() {
    solutionCount++;
  };

  this.findSolution(0, n, board, callback, validator);
  
  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var validator = 'hasAnyQueensConflicts';
  var board = new Board({n:n});
  var solution = board.rows(); 
  var callback = function() {
    solution = _.map(board.rows(), function(row) {
      return row.slice();
    });
  };
  this.findSolution(0, n, board, callback, validator);
  console.log('Single myBoard for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = 0; //fixme
  var validator = 'hasAnyQueensConflicts';
  var board = new Board({n:n});
  var callback = function() {
    solutionCount++;
  };
  this.findSolution(0, n, board, callback, validator);
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
