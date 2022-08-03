const content = document.querySelector(".content");
const sizeBtn = document.querySelector(".btn-size");
const clearBtn = document.querySelector(".btn-clear");
const resetBtn = document.querySelector(".btn-reset");

// event listener to set size of grid
sizeBtn.addEventListener("click", createGrid);

// event listener to clear the grid
clearBtn.addEventListener("click", clearGrid);
resetBtn.addEventListener("click", resetGrid);

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
    grid.addEventListener("mouseover", function () {
      grid.style.backgroundColor = "black";
    });
    content.appendChild(grid);
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
