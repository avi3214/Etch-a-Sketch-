const content = document.querySelector(".content");
const sizeBtn = document.querySelector(".btn-size");
const clearBtn = document.querySelector(".btn-clear");

// event listener to set size of grid
const gridSize = sizeBtn.addEventListener("click", createGrid);

// event listener to clear the grid
clearBtn.addEventListener("click", () => {});

// function to create grid
function createGrid() {
  const sizeSelection = prompt(
    "Choose grid size: 16 (16x16), 32 (32x32), or 64 (64x64))"
  );

  const content = document.querySelector(".content");
  content.style.setProperty("--size", sizeSelection);

  for (let i = 0; i < sizeSelection * sizeSelection; i++) {
    const grid = document.createElement("grid-div");
    grid.classList.add("square");

    grid.addEventListener("mouseover", function () {
      grid.style.backgroundColor = "black";
    });

    content.appendChild(grid);
  }
}
