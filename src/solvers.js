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


window.findNRooksSolution = function(n
  ) {
  
  //var solution = {};
  var myBoard = new Board({"n": n});
  var arrayOfCoordsToggled = [];
  var totalPiece = n;
  //myBoard.togglePiece(0, 0);
  function isOff(xVal, yVal) {
    return myBoard.attribute[xVal][yVal] === 0;
  }
  
  function recursion(myBoard) {
    // if (arrayOfCoordsToggled.length === n); {
      
    // }
    for (var i = 0; i < n; i++) {
      for (var j = 0; j < n; j++) {
        if (isOff(i, j)) {
          myBoard.togglePiece(i, j);
          arrayOfCoordsToggled.push([i, j]);
          if (!myBoard.hasAnyRooksConflicts()) {
            recursion(myBoard);
          }
         
        } 
      }
    }
      
    
  }
  recursion(myBoard);
  // for ()
  // solution[xVal] = yVal;
  // solution.n = n;
  // return solution;
    // togglePeice(0, i);
    // if (hasAnyRooksConflicts()) {
    //   // we go check down one row
    // }
    // if (!hasAnyRooksConflicts) {
    //   togglePiece();
    // }
  console.log(arrayOfCoordsToggled)
  //myBoard.togglePiece();
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(myBoard));
  return myBoard;
};

// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var myBoard = undefined; //fixme

  console.log('Single myBoard for ' + n + ' queens:', JSON.stringify(myBoard));
  return myBoard;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
