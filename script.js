const value = document.querySelector("#value");
const input = document.querySelector("#gridsize");
const grid = document.querySelector(".container-grid");
const clear = document.querySelector("#clear");
const eraser = document.querySelector("#eraser");
const randomColor = document.querySelector("#random");
const colorpicker = document.querySelector("#colorpicker");

let color = "#000000"
let isDrawing = false;
let randomSelected = false;

colorpicker.addEventListener("input", updateColor);

eraser.addEventListener("click", () => {
  randomSelected = false;
  color = "rgb(255,255,255)";
});

clear.addEventListener("click", () => {
  const allDivs = document.querySelectorAll('.gridDiv');
  allDivs.forEach(div => div.style.backgroundColor = "white");
  });

function updateColor(e) {
  randomSelected = false;
  color = e.target.value;
}

value.textContent = input.value + " x " + input.value;
createGrid(51);
input.addEventListener("input", (event) => {
  value.textContent = event.target.value + " x " + event.target.value;
  createGrid(event.target.value);
});

grid.addEventListener("mousedown", (e) => {
   isDrawing = true;
   e.preventDefault();
});

grid.addEventListener("mousemove", (e) => {
  if (randomSelected) {
    color = "rgb(" + Math.floor(Math.random()*255) + "," + Math.floor(Math.random()*255)  + "," + Math.floor(Math.random()*255)  + ")";
  } 
  if (isDrawing && e.target.className === "gridDiv") {
    e.target.style.backgroundColor = color;
  }
});

document.body.addEventListener("mouseup", () => {
  isDrawing = false;
});

function createGrid(value) {
  grid.style.backgroundColor = "white";
  clear.click();
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

randomColor.addEventListener("click", () => {
  if (!randomSelected){
    randomSelected = true;
  }
});



