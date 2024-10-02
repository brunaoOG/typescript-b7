let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let btn = document.querySelector("button");
let result = document.querySelector(".resultado ");

const somar = (x, y) => x + y;

btn.addEventListener("click", () => {
  result.innerHTML = somar(Number(num1.value), Number(num2.value));
});
