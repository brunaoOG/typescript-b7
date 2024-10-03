let num1 = document.querySelector("#num1") as HTMLInputElement;
let num2 = document.querySelector("#num2") as HTMLInputElement;
let btn = document.querySelector("button") as HTMLButtonElement;
let result = document.querySelector(".resultado ") as HTMLDivElement;

const somar = (x: number, y: number) => x + y;

btn.addEventListener("click", () => {
  result.innerHTML = somar(+num1.value, +num2.value).toString();
});
