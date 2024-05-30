document.addEventListener("DOMContentLoaded", function () {
  const colorsArray = [
    ["red", "blue", "green", "orange", "purple", "", "", "", "", ""],
    ["blue", "green", "orange", "purple", "red", "", "", "", "", ""],
    ["green", "orange", "purple", "red", "blue", "", "", "", "", ""],
    ["orange", "purple", "red", "blue", "green", "", "", "", "", ""],
    ["purple", "red", "blue", "green", "orange", "", "", "", "", ""],
    ["red", "blue", "green", "orange", "purple", "", "", "", "", ""],
    ["blue", "green", "orange", "purple", "red", "", "", "", "", ""],
    ["green", "orange", "purple", "red", "blue", "", "", "", "", ""],
    ["orange", "purple", "red", "blue", "green", "", "", "", "", ""],
    ["purple", "red", "blue", "green", "orange", "", "", "", "", ""],
    ["red", "blue", "green", "orange", "purple", "", "", "", "", ""],
    ["blue", "green", "orange", "purple", "red", "", "", "", "", ""],
    ["green", "orange", "purple", "red", "blue", "", "", "", "", ""],
    ["orange", "purple", "red", "blue", "green", "", "", "", "", ""],
    ["purple", "red", "blue", "green", "orange", "", "", "", "", ""],
    ["red", "blue", "green", "orange", "purple", "", "", "", "", ""],
    ["blue", "green", "orange", "purple", "red", "", "", "", "", ""],
    ["green", "orange", "purple", "red", "blue", "", "", "", "", ""],
    ["orange", "purple", "red", "blue", "green", "", "", "", "", ""],
    ["purple", "red", "blue", "green", "orange", "", "", "", "", ""],
  ];

  const tetrisGrid = new Grid(20, 10);
  tetrisGrid.renderGrid(colorsArray);
});
