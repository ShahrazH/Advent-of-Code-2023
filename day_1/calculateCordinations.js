let inputs = [];

fetch("./input.txt")
  .then((response) => response.text())
  .then((text) => {
    let regexp = /[a-zA-Z]+/g;
    let numbers = text.replace(new RegExp(regexp), "").split("\n");
    let singleDigitsTurnedDouble = [];
    let multipleDigitsTurnedToTwo = [];
    let alreadyDoubleDigits = [];
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i].length <= 1) {
        let singleToDouble = numbers[i] + numbers[i];
        singleDigitsTurnedDouble.push(singleToDouble);
      }

      if (numbers[i].length > 2) {
        let firstDigit = numbers[i][0];
        let lastDigit = numbers[i].slice(-1);
        multipleDigitsTurnedToTwo.push(firstDigit + lastDigit);
      }

      if (numbers[i].length === 2) {
        alreadyDoubleDigits.push(numbers[i]);
      }
    }

    inputs.push(
      singleDigitsTurnedDouble,
      multipleDigitsTurnedToTwo,
      alreadyDoubleDigits
    );

    calculateNumbers();
  });

function calculateNumbers() {
  let coordinates = 0;

  inputs.forEach((input) => {
    input.forEach((number) => {
      coordinates += parseInt(number);
    });
  });

  document.getElementById("result").innerHTML = coordinates;
}
