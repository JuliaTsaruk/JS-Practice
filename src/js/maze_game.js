let canvas = document.querySelector(".maze-game__game-canvas");
const context = canvas.getContext("2d");
const button = document.querySelector(".maze-game__button");

let promtMessage = document.querySelector(".maze-game__promt");
let okButton = document.querySelector(".button-ok");
let noButton = document.querySelector(".button-no");

let columns = 5;
let rows = 5;
let cellSize = 65;

const wallColor = "rgb(47, 80, 80)";
const pathColor = "rgb(250, 250, 250)";
const pathCleanerColor = "rgb(250, 250, 250)";

canvas.width = columns * cellSize;
canvas.height = rows * cellSize;
let pathCleaner = {
  x: 0,
  y: 0,
};

let xImage = 0;
let yImage = 0;
let xPathCleaner;
let yPathCleaner;

let array = createArray(columns, rows);
array[0][0] = true;

button.addEventListener("click", () => {
  canvas.style.display = "block";

  yImage = 0;
  xImage = 0;

  array = createArray(columns, rows);
  array[0][0] = true;

  pathCleaner = {
    x: 0,
    y: 0,
  };

  isReadyMaze();
  main();
});

function main() {
  while (!isReadyMaze()) {
    movePathCleaner();
    drawMaze();
    drawCleanerPath();
  }
  addStartImage();
}

function addStartImage() {
  let startImage = new Image();

  startImage.onload = function () {
    context.drawImage(startImage, xImage, yImage, cellSize, cellSize);
  };

  startImage.src = "../assets/img/emoji.png";
}

function addEndImage() {
  let endImage = new Image();

  endImage.onload = function () {
    context.drawImage(endImage, xPathCleaner, yPathCleaner, cellSize, cellSize);
  };

  endImage.src = "../assets/img/cocktail.png";
}

function createArray(columns, rows) {
  let array = [];

  for (let y = 0; y < rows; y++) {
    const row = [];
    for (let x = 0; x < columns; x++) {
      row.push(false);
    }
    array.push(row);
  }
  return array;
}

function drawMaze() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < columns; x++) {
      color = array[y][x] ? pathColor : wallColor;
      context.beginPath();
      context.rect(x * cellSize, y * cellSize, cellSize, cellSize);
      context.fillStyle = color;
      context.fill();
    }
  }
}

function drawCleanerPath() {
  context.beginPath();
  context.rect(
    pathCleaner.x * cellSize,
    pathCleaner.y * cellSize,
    cellSize,
    cellSize
  );
  context.fillStyle = pathCleanerColor;
  context.fill();
}

function movePathCleaner() {
  directions = [];

  if (pathCleaner.x > 0) {
    directions.push([-2, 0]);
  }

  if (pathCleaner.x < columns - 1) {
    directions.push([2, 0]);
  }

  if (pathCleaner.y > 0) {
    directions.push([0, -2]);
  }

  if (pathCleaner.y < rows - 1) {
    directions.push([0, 2]);
  }

  let [dx, dy] = getRandomItem(directions);

  pathCleaner.x += dx;
  pathCleaner.y += dy;
  xPathCleaner = pathCleaner.x * cellSize;
  yPathCleaner = pathCleaner.y * cellSize;

  if (!array[pathCleaner.y][pathCleaner.x]) {
    array[pathCleaner.y][pathCleaner.x] = true;
    array[pathCleaner.y - dy / 2][pathCleaner.x - dx / 2] = true;
  }

  addEndImage();
}

function getRandomItem(arr) {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

function isReadyMaze() {
  for (let y = 0; y < columns; y += 2) {
    for (let x = 0; x < rows; x += 2) {
      if (!array[y][x]) {
        return false;
      }
    }
  }
  return true;
}

document.addEventListener("keydown", (event) => {
  if (event.key == "ArrowLeft") {
    xImage -= 1 * cellSize;
    context.beginPath();
    context.fillStyle = "white";
    context.rect(xImage + cellSize, yImage, cellSize, cellSize);
    context.fill();

  } else if (event.key === "ArrowUp") {
    yImage -= 1 * cellSize;
    context.beginPath();
    context.fillStyle = "white";
    context.rect(xImage, yImage + cellSize, cellSize, cellSize);
    context.fill();

  } else if (event.key === "ArrowRight") {
    xImage += 1 * cellSize;
    context.beginPath();
    context.fillStyle = "white";
    context.rect(xImage - cellSize, yImage, cellSize, cellSize);
    context.fill();

  } else if (event.key === "ArrowDown") {
    yImage += 1 * cellSize;
    context.beginPath();
    context.fillStyle = "white";
    context.rect(xImage, yImage - cellSize, cellSize, cellSize);
    context.fill();
  }

  addStartImage();
  //checkForCollision();

  if (
    xImage >= canvas.width ||
    yImage >= canvas.height ||
    xImage < 0 ||
    yImage < 0
  ) {
    xImage = 0;
    yImage = 0;

    addStartImage();
  }

  if (xPathCleaner == xImage && yPathCleaner == yImage) {
    showCover();
    promtMessage.style.display = "block";
  }
});


function showCover() {
  let coverDiv = document.createElement("div");
  coverDiv.id = "cover-div";
  document.body.style.overflowY = "hidden";
  document.body.append(coverDiv);
}

function hideCover() {
  document.getElementById("cover-div").remove();
  document.body.style.overflowY = "";
}

okButton.addEventListener("click", () => {
  promtMessage.style.display = "none";
  hideCover();
  showNewGame();
});

noButton.addEventListener("click",  () =>{
	hideCover();
	promtMessage.style.display = "none";
	canvas.style.display = "none";
})

function showNewGame() {
  columns += 2;
  rows += 2;
  cellSize -= 2;

  canvas.width = columns * cellSize;
  canvas.height = rows * cellSize;

  yImage = 0;
  xImage = 0;

  array = createArray(columns, rows);
  array[0][0] = true;
	console.log(array);
  pathCleaner = {
    x: 0,
    y: 0,
  };

  isReadyMaze();
  main();
}

/*function checkForCollision() {
 
  let imgData = context.getImageData(0, 0, cellSize * columns, cellSize * rows);
  let pixels = imgData.data;

  
  for (let i = 0; (n = pixels.length), i < n; i += 3) {
    let red = pixels[i];
    let green = pixels[i + 1];
    let blue = pixels[i + 2];
	let alpha = pixels[i + 3];

    
    if (red == 47 && green == 80 && blue == 80) {
      
    }
  }

  return false;
}*/