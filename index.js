document.addEventListener("DOMContentLoaded", function () {
  const colorsArray = [
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "blue", "", "", "", "", ""],
    ["", "", "blue", "blue", "blue", "", "", "", "", ""],
    ["", "", "", "orange", "", "", "", "", "", ""],
    ["", "", "", "orange", "", "", "", "", "", ""],
    ["", "", "red", "red", "", "", "", "", "", ""],
    ["", "", "red", "red", "", "", "", "", "", ""],
    ["", "purple", "purple", "purple", "purple", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["", "", "", "", "", "", "", "", "", ""],
    ["green", "green", "", "", "", "", "", "", "", ""],
    ["green", "green", "", "", "", "", "", "", "", ""],
    ["", "", "orange", "orange", "", "", "", "", "", ""],
    ["", "", "orange", "orange", "", "", "", "", "", ""],
    ["", "red", "", "red", "", "", "", "", "", ""],
    ["", "red", "red", "red", "", "", "", "", "", ""],
    ["green", "green", "red", "", "blue", "blue", "", "", "", ""],
    [
      "green",
      "green",
      "",
      "",
      "blue",
      "blue",
      "orange",
      "orange",
      "orange",
      "orange",
    ],
  ];

  const tetrisGrid = new Grid(20, 10);
  tetrisGrid.renderGrid(colorsArray);
});
