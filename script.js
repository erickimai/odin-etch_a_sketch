const value = document.querySelector("#value");
const input = document.querySelector("#gridsize");
const grid = document.querySelector(".container-grid");

value.textContent = input.value + " x " + input.value;
createGrid(1);
input.addEventListener("input", (event) => {
  value.textContent = event.target.value + " x " + event.target.value;
  createGrid(event.target.value);
});

function createGrid(value) {
  grid.textContent = "";
  for (let i = 1; i <= value * value; i++) {
    let div = document.createElement("div");
    div.setAttribute("class", "gridDiv");
    div.style.width = 100 / value; 
    div.style.height = 100 / value; 
    grid.appendChild(div);
  }
  grid.style.gridTemplateColumns = `repeat(${value}, 1fr)`;
}