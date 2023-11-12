const prompt = require("prompt-sync")();

//create function to use tolls to cut garss -- teeth
const tools = ["teeth"];
let bankAccount = 0;

console.log(
  " I am starting my landstpe businesss and I can cut your grass with my teath"
);

function useTeeth() {
  let answer = prompt("would you like to have your grass cut with my teeth?");
  console.log(answer);
  if (answer.toLowerCase() === "y") {
    bankAccount++;
  }
  console.log(bankAccount);
}

function buyTools(price) {
  if (bankAccount >= 5) {
    let answer = prompt("would you like to buy scissors");
    console.log(answer);
    if (answer.toLowerCase() === "y") {
      bankAccount -= price;
    }
  }
}

while (bankAccount < 5) {
  useTeeth();
}

buyTools(5);

console.log(bankAccount);
