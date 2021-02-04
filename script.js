var gridExample = [
  ["O", NaN, "X"],
  ["X", "X", "O"],
  ["X", "O", "O"],
];

/// if NaN then the total will be NaN indicating difference between this and a 0

function createNumberGrid(grid) {
  var numberGrid = [];
  let numberRow = [];
  grid.forEach((line) => {
    line.forEach((element) => {
      if (element === "X") {
        numberRow.push(1);
      } else if (element === "O") {
        numberRow.push(0);
      } else {
        numberRow.push(NaN);
      }
    });
    numberGrid.push(numberRow);
    numberRow = [];
  });
  return numberGrid;
}

function transLateWinner(number) {
  if (number === 1) {
    return "X";
  } else if (number === 0) {
    return "O";
  } else {
    return false;
  }
}

function findRowWin(numbGrid) {
  let winner = false;
  numbGrid.forEach((row) => {
    const sumRow = row.reduce((a, b) => a + b, 0);
    if (sumRow === numbGrid.length || sumRow === 0) {
      winner = row[0];
    }
  });
  return transLateWinner(winner);
}

function findColumnWin(numbGrid) {
  let indexArray = [];

  numbGrid.forEach((row) => {
    indexArray.push(row[0]);
  });

  const sumRow = indexArray.reduce((a, b) => a + b, 0);
  if (sumRow === numbGrid.length || sumRow === 0) {
    return transLateWinner(indexArray[0]);
  }
  return false;
}

function findDiagonalWin(numbGrid) {
  let indexArray = [];
  numbGrid.forEach((row, i) => {
    indexArray.push(row[i]);
  });

  const sumRow = indexArray.reduce((a, b) => a + b, 0);
  if (sumRow === numbGrid.length || sumRow === 0) {
    return transLateWinner(indexArray[0]);
  }
  return false;
}

function findBackwardsDiagonalWin(numbGrid) {
  let indexArray = [];
  let indexCounter = numbGrid.length - 1;
  numbGrid.forEach((row, i) => {
    indexArray.push(row[indexCounter - i]);
  });

  const sumRow = indexArray.reduce((a, b) => a + b, 0);
  if (sumRow === numbGrid.length || sumRow === 0) {
    return transLateWinner(indexArray[0]);
  }
  return false;
}

function findWinner(grid) {
  if (grid.length < 3) {
    return "Grid too small";
  }

  const numberGrid = createNumberGrid(grid);

  const rowWinner = findRowWin(numberGrid);

  const columnWinner = findColumnWin(numberGrid);

  const diagonalWinner = findDiagonalWin(numberGrid);

  const backwardsDiagonalWinner = findBackwardsDiagonalWin(numberGrid);

  if (rowWinner) {
    console.log(rowWinner + " has won!");
  } else if (columnWinner) {
    console.log(columnWinner + " has won!");
  } else if (diagonalWinner) {
    console.log(diagonalWinner + " has won!");
  } else if (backwardsDiagonalWinner) {
    console.log(backwardsDiagonalWinner + " has won!");
  } else {
    console.log("No winner has won!");
  }
}

findWinner(gridExample);
