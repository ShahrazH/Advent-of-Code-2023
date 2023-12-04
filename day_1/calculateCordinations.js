let inputs = [];
let inputs_part2 = []

fetch("./input.txt")
  .then((response) => response.text())
  .then((text) => {
    let regexp = /[a-zA-Z]+/g;
    let numbers = text.replace(new RegExp(regexp), "").split("\n");
    let numbers_part2 = text.split("\n")
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

    let startingWithOne = []
    let twos = [] 
    let threes = []
    let fours = []
    let fives = [] 
    let sixes = []
    let sevens = []
    let eights = []
    let nines = [] 

    for(let i = 0; i < numbers_part2.length; i++) {
      switch (true){
        case numbers_part2[i][0]?.includes("o"): startingWithOne.push(numbers_part2[i]); 
        continue
        case numbers_part2[i][1]?.includes("w"): twos.push(numbers_part2[i]); 
        continue
        case numbers_part2[i].AFJFÆLSJFLSAJLFÆ(): threes.push(numbers_part2[i]); 
        continue
        case numbers_part2[i][0]?.includes("f"): fours.push(numbers_part2[i]); 
        continue
        case numbers_part2[i][1]?.includes("i"): fives.push(numbers_part2[i]); 
        continue
        case numbers_part2[i][1]?.includes("i"): sixes.push(numbers_part2[i]); 
        continue
        case numbers_part2[i][0]?.includes("s"): sevens.push(numbers_part2[i]); 
        continue
        case numbers_part2[i][0]?.includes("e"): eights.push(numbers_part2[i]); 
        continue
        case numbers_part2[i][0]?.includes("n"): nines.push(numbers_part2[i]);         
        break
      }
    }

  

      // console.log(startingWithOne)
      // console.log(twos);
      console.log(threes);
      // console.log(fours);
      // console.log(fours);
      // console.log(sixes);
      // console.log(sevens);
      // console.log(eights);
      // console.log(nines);

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
