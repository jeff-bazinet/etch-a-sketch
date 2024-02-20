const grid = [];

function promptUserRow(){
  return prompt("How many rows?");
}

function promptUserColumn(){
  return prompt("How many columns?")
}

// Determine if we have more rows or columns. If we have more rows, use that to determine the max # of rows based on the container
let useRows = numOfSquaresRow >= numOfSquaresColumn ? true : false;
// The size of a square is the container size / the # of rows or columns. 2 pixels taken off for border.
const maxSizeOfSquare = (960 / numOfSquaresColumn) - 2;
// The max # of rows is 960 / 

function createGridArray(squaresRow, squaresColumn) {
  for (let i = 0; i < squaresRow; i++) {
    console.log(`adding new row ${i}`);
    console.log(grid);
    grid[i] = [];
    for (let j = 0; j < squaresColumn; j++) {
      grid[i][j] = `${i},${j}`;
      renderSquare(grid[i][j]);
    }
  }
}

function renderSquare(gridItem) {
  let squareGridContainer = document.querySelector('.square-grid');
  let squareDiv = document.createElement('div');
  squareDiv.classList.add('square');
  squareDiv.setAttribute('id', gridItem);
  squareDiv.style.height = `${maxSizeOfSquare}px`;
  squareDiv.style.flex = `0 0 ${maxSizeOfSquare}px`;
    // squareDiv.textContent = gridItem;
  squareGridContainer.append(squareDiv);
}

promptUserRow();
promptUserColumn();
createGridArray(numOfSquaresRow, numOfSquaresColumn);
// renderGrid();
