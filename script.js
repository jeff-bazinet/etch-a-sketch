let grid = [];
let squaresRow = 0;
let squaresColumn = 0;
let maxSizeOfSquare = 0;
let inputButton = document.querySelector('#create-grid-btn');
let rowsInput = document.querySelector('#rows-input');

function clearCurrentGrid() {
  let squareGridContainer = document.querySelector('.square-grid');
  squareGridContainer.replaceChildren();
}

function calculateMaxSizeOfSquare(squaresColumn) {
  maxSizeOfSquare = 800 / squaresColumn;
}

function createGridArray(squaresRow, squaresColumn) {
  for (let i = 0; i < squaresRow; i++) {
    grid[i] = [];
    for (let j = 0; j < squaresColumn; j++) {
      grid[i][j] = `${i},${j}`;
      renderSquare(grid[i][j]);
    }
  }
}

function renderSquare(gridItem) {
  const squareGridContainer = document.querySelector('.square-grid');
  const squareDiv = document.createElement('div');
  squareDiv.classList.add('square');
  squareDiv.setAttribute('id', gridItem);
  squareDiv.style.flex = `1 1 ${maxSizeOfSquare}px`;
  squareDiv.textContent = '';
  squareGridContainer.append(squareDiv);

  squareDiv.addEventListener('mouseenter', (e) => {
    squareDiv.style.backgroundColor = randomizeSquareColorHex();
    setBrightness(squareDiv);
  });
}

function randomizeSquareColorHex() {
  let letters = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setBrightness(squareDiv) {
  let currentBrightness = squareDiv.dataset.brightness || 100;
  currentBrightness = parseInt(currentBrightness) - 20;

  if (currentBrightness >= 0) {
    squareDiv.style.filter = `brightness(${currentBrightness}%)`;
    squareDiv.dataset.brightness = currentBrightness;
  }
}

inputButton.addEventListener('click', (e) => {
  squaresRow = parseInt(document.querySelector('#rows-input').value);
  squaresColumn = parseInt(document.querySelector('#columns-input').value);

  if (squaresRow > 100 || squaresColumn > 100) {
    alert('Please Enter Values Less Than 100');
    return;
  }

  if (
    typeof squaresRow === 'number' &&
    squaresRow > 0 &&
    typeof squaresColumn === 'number' &&
    squaresColumn > 0
  ) {
    clearCurrentGrid();
    calculateMaxSizeOfSquare(squaresColumn);
    createGridArray(squaresRow, squaresColumn);
  }
});

rowsInput.focus();

calculateMaxSizeOfSquare(4);
createGridArray(4, 4);
