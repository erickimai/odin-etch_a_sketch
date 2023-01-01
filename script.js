const value = document.querySelector("#value");
const input = document.querySelector("#gridsize");
const grid = document.querySelector(".container-grid");
const clear = document.querySelector("#clear");
const shades = document.querySelector("#shades");
const eraser = document.querySelector("#eraser");
const randomColor = document.querySelector("#random");
const colorpicker = document.querySelector("#colorpicker");

let color = "#000000"
let temp = color;
let isDrawing = false;
let eraserSelected = false;
let shadesSelected = false;
let randomSelected = false;

colorpicker.addEventListener("input", updateColor);

eraser.addEventListener("click", () => {
  if (!eraserSelected) {
    eraserSelected = true;
    randomSelected = false;
    color = "rgba(255,255,255,1)";
    eraser.style.backgroundColor = "gray";
  } else {
    eraser.style.backgroundColor = "white";
    eraserSelected = false;
    color = temp;
  }
});

clear.addEventListener("click", () => {
  const allDivs = document.querySelectorAll('.gridDiv');
  allDivs.forEach(div => div.style.backgroundColor = "white");
  allDivs.forEach(div => div.style.opacity = "0.1");
  });

shades.addEventListener("click", () => {
  if (!shadesSelected && randomSelected === false) {
  shadesSelected = true;
  eraserSelected = false;
  shades.style.backgroundColor = "gray";
  } else {
    shades.style.backgroundColor = "white";
    shadesSelected = false;const value = document.querySelector("#value");
const input = document.querySelector("#gridsize");
const grid = document.querySelector(".container-grid");
const clear = document.querySelector("#clear");
const shades = document.querySelector("#shades");
const eraser = document.querySelector("#eraser");
const randomColor = document.querySelector("#random");
const colorpicker = document.querySelector("#colorpicker");

let color = "#000000"
let temp = color;
let isDrawing = false;
let eraserSelected = false;
let shadesSelected = false;
let randomSelected = false;

colorpicker.addEventListener("input", updateColor);

eraser.addEventListener("click", () => {
  shadesSelected = false;
  randomSelected = false;
  random.style.backgroundColor = "white";
  shades.style.backgroundColor = "white";
  if (!eraserSelected) {
    eraserSelected = true;
    color = "rgba(255,255,255,1)";
    eraser.style.backgroundColor = "gray";
  } else {
    eraser.style.backgroundColor = "white";
    eraserSelected = false;
    color = temp;
  }
});

clear.addEventListener("click", () => { 
  const allDivs = document.querySelectorAll('.gridDiv');
  allDivs.forEach(div => div.style.backgroundColor = "white");
  allDivs.forEach(div => div.style.opacity = "0.1");
  });

shades.addEventListener("click", () => {
  randomSelected = false;
  eraserSelected = false;
  random.style.backgroundColor = "white";
  eraser.style.backgroundColor = "white";
  if (!shadesSelected && randomSelected === false) {
    shadesSelected = true;
    shades.style.backgroundColor = "gray";
    color = temp;
  } else {
    shades.style.backgroundColor = "white";
    shadesSelected = false;
  }
});

function updateColor(e) {
  randomSelected = false;
  color = e.target.value;
  temp = color;
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

grid.addEventListener("mouseover", (e) => {
  if (isDrawing && shadesSelected && e.target.className === "gridDiv") {
    e.target.style.opacity = Number(parseFloat(e.target.style.opacity)) + 0.1;
  }
});

grid.addEventListener("mousemove", (e) => {
  if (randomSelected) {
    color = "rgba(" + Math.floor(Math.random()*255) + "," + Math.floor(Math.random()*255)  + "," + Math.floor(Math.random()*255)  + 1 + ")";
    e.target.style.opacity = "1"
  }
  if (isDrawing && e.target.className === "gridDiv" && !shadesSelected) {
    e.target.style.backgroundColor = color;
    e.target.style.opacity = "1"
  } else if ((isDrawing && e.target.className === "gridDiv" && shadesSelected)) {
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
  const allDivs = document.querySelectorAll('.gridDiv');
  allDivs.forEach(div => div.style.opacity = "0.1");
}

randomColor.addEventListener("click", () => {
    shadesSelected = false;
    eraserSelected = false;
    shades.style.backgroundColor = "white";
    eraser.style.backgroundColor = "white";
  if (!randomSelected){
    randomSelected = true;
    randomColor.style.backgroundColor = "gray";
  } else {
    randomSelected = false;
    randomColor.style.backgroundColor = "white";
    color = temp;
  }
});




  }
});

function updateColor(e) {
  randomSelected = false;
  color = e.target.value;
  temp = color;
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

grid.addEventListener("mouseover", (e) => {
  if (isDrawing && shadesSelected && e.target.className === "gridDiv") {
    e.target.style.opacity = Number(parseFloat(e.target.style.opacity)) + 0.1;
  }
});

grid.addEventListener("mousemove", (e) => {
  if (randomSelected) {
    color = "rgba(" + Math.floor(Math.random()*255) + "," + Math.floor(Math.random()*255)  + "," + Math.floor(Math.random()*255)  + 1 + ")";
    e.target.style.opacity = "1"
  }
  if (isDrawing && e.target.className === "gridDiv" && !shadesSelected) {
    e.target.style.backgroundColor = color;
    e.target.style.opacity = "1"
  } else if ((isDrawing && e.target.className === "gridDiv" && shadesSelected)) {
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
  const allDivs = document.querySelectorAll('.gridDiv');
  allDivs.forEach(div => div.style.opacity = "0.1");
}

randomColor.addEventListener("click", () => {
  if (!randomSelected){
    randomSelected = true;
    shadesSelected = false;
    randomColor.style.backgroundColor = "gray";
  } else {
    randomSelected = false;
    shadesSelected = false;
    randomColor.style.backgroundColor = "white";
    color = temp;
  }
});



