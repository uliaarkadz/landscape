const prompt = require("prompt-sync")();

//create function to use tolls to cut garss -- teeth
const tools = [
  "teeth",
  "scissors",
  "old-timey push lawnmower",
  "battery-powered lawnmower",
];
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
//use teeth
useTool(5, tools[0], 1);
//buy scisors
buyTools(5, tools[1]);
//use scisors
useTool(25, tools[1], 5);
// buy pusj lm
buyTools(25, tools[2]);
//use push lm
useTool(250, tools[2], 50);
// buy battery lm
buyTools(25, tools[3]);

console.log(bankAccount);
