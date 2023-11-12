const prompt = require("prompt-sync")();

//create function to use tolls to cut garss -- teeth
const tools = ["teeth", "scissors"];
let bankAccount = 0;

console.log(
  " I am starting my landstpe businesss and I can cut your grass with my teath"
);

function useTool(count, tool) {
  while (bankAccount < count) {
    let answer = prompt(`Would you like to have your grass cut with ${tool}?`);
    console.log(answer);
    if (answer.toLowerCase() === "y") {
      bankAccount++;
    }
  }
  console.log(bankAccount);
}

function buyTools(price, tool) {
  if (bankAccount >= 5) {
    let answer = prompt(`Would you like to buy ${tool}`);
    console.log(answer);
    if (answer.toLowerCase() === "y") {
      bankAccount -= price;
    }
  }
}

useTool(5, tools[0]);

buyTools(5, tools[1]);

console.log(bankAccount);
