class SudokuSolver {

  validate(puzzleString) {
    if (puzzleString.length != 81) {
    /*   return 'valid length of puzzleString';
    } else { */
      return 'invalid length of puzzleString'
    }
    
    const validChars = /^[1-9.]+$/; 
    if (!validChars.test(puzzleString)) {
      return 'invalid characters in puzzleString';
    }
   
    return 'valid puzzle string';
  }

  checkRowPlacement(puzzleString, row, column, value) {

  }

  checkColPlacement(puzzleString, row, column, value) {

  }

  checkRegionPlacement(puzzleString, row, column, value) {

  }

  solve(puzzleString) {

  }
}

module.exports = SudokuSolver;

