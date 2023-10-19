// Buiness Logic
function calculate(event) {
  event.preventDefault();
  const number1 = parseInt(document.querySelector("input#input1").value);
  const number2 = parseInt(document.querySelector("input#input2").value);
  const number3 = parseInt(document.querySelector("input#input3").value);
  const num1_2 = number1 + number2;
  const num2_3 = number2 + number3;
  const num3_1 = number3 + number1;

  // User Interface Logic
  let answer;
  if (number1 && number2 && number3) {
    if (number3 >= num1_2 || number1 >= num2_3 || number2 >= num3_1) {
      answer = "Not a triangle";
      document.getElementById("output").innerText = answer;
      document.getElementById("output-display").removeAttribute("class");
    } else if (number1 === number2 && number2 === number3) {
      answer = "Equilateral";
      document.getElementById("output").innerText = answer;
      document.getElementById("output-display").removeAttribute("class");
    } else if (number1 !== number2 && number2 !== number3) {
      answer = "Scalene"
      document.getElementById("output").innerText = answer;
      document.getElementById("output-display").removeAttribute("class");
    } else if ((number1 === number2 && number2 !== number3) || (number1 === number3 && number3 !== number2) || (number3 === number2 && number2 !== number1)) {
      answer = "Isosceles";
      document.getElementById("output").innerText = answer;
      document.getElementById("output-display").removeAttribute("class");
    }
  } else {
    answer = "Please fill out the form correctly";
    document.getElementById("output").innerText = answer;
    document.getElementById("output-display").removeAttribute("class");
  }
}

window.addEventListener("load", function () {
  let form = document.querySelector("form");
  form.addEventListener("submit", calculate)
});
