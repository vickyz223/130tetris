class Grid {
  constructor() {
    console.log("inside grid");
    const grid = document.getElementById("tetris-grid");
    console.log(grid, "grid");
    if (grid) {
      for (let row = 0; row < 20; row++) {
        for (let col = 0; col < 10; col++) {
          const cell = document.createElement("div");
          cell.classList.add("grid-cell", `x-${row}`, `y-${col}`);
          cell.textContent = `${row},${col}`;
          grid.appendChild(cell);
        }
      }
    } else {
      console.error("Grid element not found");
    }
  }

  renderGrid(colorsArray) {
    const container = document.getElementById("tetris-grid");
    for (let row = 0; row < 20; row++) {
      for (let col = 0; col < 10; col++) {
        const cell = container.querySelector(`.x-${row}.y-${col}`);
        // remove all extra classes
        cell.classList.forEach((className) => {
          if (!/^(x-\d+|y-\d+|grid-cell)$/.test(className)) {
            element.classList.remove(className);
          }
        });
        // add new color class (white if none)
        const colorClass =
          colorsArray[row][col] == "" ? "white" : colorsArray[row][col];
        cell.classList.add(colorClass);
      }
    }
  }
}
