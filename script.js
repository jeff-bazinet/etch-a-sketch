let grid = [];
let squaresRow = 0;
let squaresColumn = 0;
let maxSizeOfSquare = 0;
let inputButton = document.querySelector('#create-grid-btn');

inputButton.addEventListener('click', (e) => {
  squaresRow = parseInt(document.querySelector('#rows-input').value);
  squaresColumn = parseInt(document.querySelector('#columns-input').value);

  if (
    typeof squaresRow === 'number' &&
    squaresRow > 0 &&
    typeof squaresColumn === 'number' &&
    squaresColumn > 0
  ) {
    clearCurrentGrid();
    calculateMaxRowsColumns();
    createGridArray(squaresRow, squaresColumn);
  }
});

function clearCurrentGrid() {
  let squareGridContainer = document.querySelector('.square-grid');
  squareGridContainer.replaceChildren();
}

function calculateMaxRowsColumns() {
  let squareSize = squaresRow >= squaresColumn ? squaresRow : squaresColumn;
  maxSizeOfSquare = 960 / squareSize;
}

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
  squareDiv.textContent = gridItem;
  squareGridContainer.append(squareDiv);
}
