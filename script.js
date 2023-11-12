const prompt = require("prompt-sync")();

//create function to use tolls to cut garss -- teeth
const tools = [
  { name: "teeth", cost: 1, price: 0 },
  { name: "scissors", cost: 5, price: 5 },
  { name: "old-timey push lawnmower", cost: 50, price: 25 },
  { name: "battery-powered lawnmower", cost: 100, price: 250 },
  { name: "team of starving students", cost: 250, price: 500 },
];
const player = {
  bankAccount: 0,
  tool: 0,
  isWinner: false,
};
const winAmount = 10;

console.log(
  " I am starting my landstpe businesss and I can cut your grass with my teath"
);

function useTool() {
  const tool = tools[player.tool];
  alert(`You used ${tool} for cutting grass and made ${tool.cost} money`);
  //let answer = prompt(`Would you like to have your grass cut with ${tool}?`);

  player.bankAccount += tool.generates;
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
buyTools(250, tools[3]);
//use battery lm
useTool(500, tools[2], 100);
//hire team
buyTools(500, tools[4]);

while (bankAccount < winAmount) {
  //use team
  useTool(1000, tools[4], 500);

  console.log("You won");
  console.log(bankAccount);
}
