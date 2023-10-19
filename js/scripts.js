function calculate(event) {
  event.preventDefault();
  const number1 = parseInt(document.querySelector("input#input1").value);
  const number2 = parseInt(document.querySelector("input#input2").value);
  const number3 = parseInt(document.querySelector("input#input3").value);
  console.log(number1)
  console.log(number2)
  console.log(number3)
 
  let answer;
  if (number1 && number2 && number3) {
    if (number1 === number2 && number2 === number3) {
      answer = "Equilateral";
    } else if (number1 !== number2 && number2 !== number3) {
      answer = "Scalene"
    } else if (number1 === number2 && number2 !== number3) {
      answer = "Isosceles";
    } else if (number1 === number3 && number3 !== number2) {
      answer = "Isosceles";
    } else if (number3 === number2 && number2 !== number1) {
      answer = "Isosceles";
      document.getElementById("answer").innerText = answer;
    }
    document.getElementById("answer").innerText = answer;
  }
}

window.addEventListener("load", function () {
  let form = document.querySelector("form");
  form.addEventListener("submit", calculate)
});