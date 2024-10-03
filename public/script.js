var num1 = document.querySelector("#num1");
var num2 = document.querySelector("#num2");
var btn = document.querySelector("button");
var result = document.querySelector(".resultado ");
var somar = function (x, y) { return x + y; };
btn.addEventListener("click", function () {
    result.innerHTML = somar(+num1.value, +num2.value).toString();
});
