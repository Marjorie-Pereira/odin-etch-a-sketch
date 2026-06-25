const containerDiv = document.querySelector("#container");
const newGridButton = document.querySelector("#btn");
const containerMaxWidth = 960;

buildCustomGrid();
interactWithGrid();

function buildCustomGrid(gridSize = 16) {
  containerDiv.innerHTML = "";

  for (let i = 0; i < gridSize; i++) {
    const gridRow = document.createElement("div");
    gridRow.classList.add("grid-row");
    containerDiv.appendChild(gridRow);

    for (let j = 0; j < gridSize; j++) {
      const gridBox = document.createElement("div");
      gridBox.classList.add("grid-box");
      gridBox.style.width = `${containerMaxWidth / gridSize}px`;
      gridBox.style.height = `${containerMaxWidth / gridSize}px`;
      gridRow.appendChild(gridBox);
    }
  }
}

newGridButton.addEventListener("click", () => {
  let size = Number(
    prompt("Choose dimension for the grid (between 1 and 100):"),
  );

  while (size <= 0 || size > 100 || isNaN(size)) {
    size = prompt("Please, insert a valid input (between 1 and 100):");
  }

  buildCustomGrid(size);
  interactWithGrid();
});

function interactWithGrid() {
  const gridBoxes = document.querySelectorAll(".grid-box");
 
  const opacityIncrease = 10;
  gridBoxes.forEach((box) => {
    box.addEventListener("mouseover", (e) => {
      const currentOpacity = Number(box.style.opacity) * 100;
      const newOpacity = currentOpacity + opacityIncrease;
      box.style.opacity = `${newOpacity}%`;
    });
  });
}
