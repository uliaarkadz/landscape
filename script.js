const prompt = require("prompt-sync")();

//create function to use tolls to cut garss -- teeth
const tools = ["teeth", "scissors", "old-timey push lawnmower"];
let bankAccount = 0;

console.log(
  " I am starting my landstpe businesss and I can cut your grass with my teath"
);

function useTool(count, tool, price) {
  while (bankAccount < count) {
    let answer = prompt(`Would you like to have your grass cut with ${tool}?`);
    console.log(answer);
    if (answer.toLowerCase() === "y") {
      bankAccount += price;
    }
  }
  console.log(bankAccount);
}

function buyTools(price, tool) {
  if (bankAccount >= price) {
    let answer = prompt(`Would you like to buy ${tool}`);
    console.log(answer);
    if (answer.toLowerCase() === "y") {
      bankAccount -= price;
    }
  }
}

useTool(5, tools[0], 1);
buyTools(5, tools[1]);
useTool(25, tools[1], 5);
buyTools(25, tools[2]);

console.log(bankAccount);
