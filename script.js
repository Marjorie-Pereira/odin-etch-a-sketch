const containerDiv = document.querySelector("#container");
// 16x16 grid

for (let i = 0; i < 16; i++) {
  const gridRow = document.createElement("div");
  gridRow.classList.add("grid-row");
  containerDiv.appendChild(gridRow);

  for (let j = 0; j < 16; j++) {
    const gridBox = document.createElement("div");
    gridBox.classList.add("grid-box");
    gridRow.appendChild(gridBox);
  }
}

const gridBoxes = document.querySelectorAll(".grid-box");

gridBoxes.forEach((box) => {
  box.addEventListener("mouseover", (e) => {
    box.style.backgroundColor = "red";
  });
});
