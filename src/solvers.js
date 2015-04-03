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

window.findNRooksSolution = function(n) {
  var solution = [];




  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};



// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) {
  var solutionCount = 0;

  //var board = new Board({n: n});
  var board = new Board({n: n});

  var rookCheck = function(board, row){
    console.log('rookCheckStart row=', row);


    for(var column = 0; column <= n-1 ; column++){
      console.log('rc',[row, column]);
      // toggle element
      board.togglePiece(row, column);


    console.log('*******************');
    for (var i=0; i<board.get(0).length; i++){
      console.log(board.get(i));
    }


      // run col check
      if(board.hasColConflictAt(column)){
        board.togglePiece(row, column);
        //possible continue here
      } else {
        row++;
        console.log("row:"+row);
        if (row >= n && board.hasColConflictAt(column) === false) {
          solutionCount++;
          console.log("sol:" + solutionCount);
          //row-=2;
          break;
          //possibly need to break here
        } else {
          //if(row === n)
          console.log('rowPRE', row);
          rookCheck(board, row);
          row -= 1;
          board.togglePiece(row, column);
          // all rows below current row blank out; bug fix

        }
      }
    }
  };
  rookCheck(board,0);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
