import hourSum from "./hoursum.js";

const first = document.getElementById("first");
const second = document.getElementById("second");
const result = document.getElementById("result");

first.addEventListener("keyup", calculate);
second.addEventListener("keyup", calculate);

first.focus();

function calculate() {
  this.value = this.value.replace(/[^0-9]/g, ":");
  result.innerText = hourSum(first.value, second.value);
}

document.getElementsByTagName("form")[0].addEventListener("submit", (e) => {
  e.preventDefault();
  first.focus();
});
