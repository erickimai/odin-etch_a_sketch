const value = document.querySelector("#value");
const input = document.querySelector("#grid");
value.textContent = input.value;
input.addEventListener("input", (event) => {
  value.textContent = event.target.value + "x" + event.target.value;
})