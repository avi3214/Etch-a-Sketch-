const content = document.querySelector(".content");
const sizeBtn = document.querySelector(".btn-size");
const clearBtn = document.querySelector(".btn-clear");
const resetBtn = document.querySelector(".btn-reset");
const rgbBtn = document.querySelector(".btn-rgb");

// event listener to set size of grid
sizeBtn.addEventListener("click", createGrid);

// event listener to clear the grid
clearBtn.addEventListener("click", clearGrid);
resetBtn.addEventListener("click", resetGrid);

// let currentClick = 0;
// let total = 3;
// let gridSize = 0;

// function game() {
//   while (currentClick < total) {
//     sizeBtn.addEventListener("click", () => {
//       currentClick += 1;
//     });
//     // resetGrid();
//     switch (currentClick) {
//       case 1:
//         sizeBtn.innerText = "16x16";
//         gridSize = 16;
//         createGrid(gridSize);
//         console.log(currentClick);
//         break;
//       case 2:
//         sizeBtn.innerText = "32x32";
//         gridSize = 32;
//         createGrid(gridSize);
//         break;
//       case 3:
//         sizeBtn.innerText = "64x64";
//         gridSize = 64;
//         createGrid(gridSize);
//         break;
//       default:
//         sizeBtn.innerText = "16x16";
//         gridSize = 16;
//         createGrid(gridSize);
//     }
//   }
// }

// function to create grid
function createGrid() {
  const sizeSelection = prompt(
    "Choose grid size: 16 (16x16), 32 (32x32), or 64 (64x64))"
  );

  const content = document.querySelector(".content");
  content.style.setProperty("--size", sizeSelection);

  for (let i = 0; i < sizeSelection * sizeSelection; i++) {
    const grid = document.createElement("div");
    // grid.classList.add("square");

    if (rgbBtn.clicked === true) {
      grid.addEventListener("mouseover", function () {
        grid.style.backgroundColor = generateColor();
      });
      content.appendChild(grid);
    } else {
      grid.addEventListener("mouseover", function () {
        grid.style.backgroundColor = "black";
      });
      content.appendChild(grid);
    }
  }
}

function resetGrid() {
  const content = document.querySelector(".content");
  while (content.firstChild) content.removeChild(content.firstChild);
}

function clearGrid() {
  let squareDivs = content.getElementsByTagName("div");
  // console.log("LENGTH IS " + squareDivs.length);
  // console.log(squareDivs); returns a node list

  for (let i = 0; i < squareDivs.length; i++) {
    squareDivs[i].style.backgroundColor = "#d3d3d3";
  }
}

function generateColor() {
  let colorCode = "0123456789ABCDEF";
  let code = "#";
  for (let i = 0; i < 6; i++) {
    code += colorCode[Math.floor(Math.random() * 16)];
  }
  return code;
}
