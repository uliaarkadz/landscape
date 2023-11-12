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
const winAmount = 1000;

console.log(
  " I am starting my landstpe businesss and I can cut your grass with my teath"
);

function useTool() {
  const tool = tools[player.tool];
  console.log(
    `You used ${tool.name} for cutting grass and made ${tool.cost} money`
  );
  player.bankAccount += tool.cost;
}

function buyTools() {
  if (player.tool + 1 < tools.length) {
    const nextTool = tools[player.tool + 1];
    if (nextTool.price <= player.bankAccount) {
      player.bankAccount -= nextTool.price;
      player.tool += 1;
    } else {
      console.log("Not enough money to buy a new tool");
    }
  } else {
    console.log("No more tools available to use");
  }
}

function winPlayer() {
  if (player.tool == tools.length - 1 && player.bankAccount >= winAmount) {
    console.log("You are the winner");
    player.isWinner = true;
  }
}

while (!player.isWinner) {
  let answer = prompt(
    `You bank account currently has ${player.bankAccount} $ do you want [c]ut the grass or [b]uy a new tool?`
  );
  switch (answer) {
    case "c":
      useTool();
      break;
    case "b":
      buyTools();
      break;
    default:
      console.log("You used invalid option");
      break;
  }
  winPlayer();
}
