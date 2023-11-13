const prompt = require("prompt-sync")();

//create function to use tolls to cut garss -- teeth
const tools = [
  { name: "teeth", cost: 1, price: 0, available: true },
  { name: "scissors", cost: 5, price: 5, available: false },
  { name: "old-timey push lawnmower", cost: 50, price: 25, available: false },
  {
    name: "battery-powered lawnmower",
    cost: 100,
    price: 250,
    available: false,
  },
  {
    name: "team of starving students",
    cost: 250,
    price: 500,
    available: false,
  },
];

const player = {
  bankAccount: 0,
  tool: 0,
  availableTools: [tools[0].name],
  isWinner: false,
  allToolsSet: false,
};
const winAmount = 1000;

console.log(
  "^^^^^^^^^^^^^^^^Welcome to a world of landscaping! Let's start the game!^^^^^^^^^^^^^^^^^^^^"
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
      tools[player.tool].available = true;
      player.availableTools.push(tools[player.tool].name);
      if (player.availableTools.length == tools.length) {
        player.allToolsSet = true;
      }
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

function resetGame() {
  (player.bankAccount = 0),
    (player.tool = 0),
    (player.availableTools = [tools[0].name]),
    (player.isWinner = false),
    (player.allToolsSet = false);

  for (let tool in tools) {
    if (tool.name != "teeth") tool.available = false;
  }
}

function useMultipleTools(multipleTools) {
  for (let index of multipleTools) {
    console.log(
      `You used ${tools[index - 1].name} for cutting grass and made ${
        tools[index - 1].cost
      } money`
    );
    player.bankAccount += tools[index - 1].cost;
  }
  console.log(`Your bank account has $ ${player.bankAccount}`);
}

function sellTools(forSale) {
  if (tools[forSale].available) {
    player.bankAccount += tools[forSale].price / 2;
    player.availableTools.splice(forSale, 1);
    tools[forSale].available = false;
    console.log(
      `You sold ${tools[forSale].name} tool and made ${
        tools[forSale].price / 2
      } money`
    );
  } else {
    console.log("No more tools available to sell");
  }
}
while (!player.isWinner) {
  if (player.availableTools.length !== tools.length && !player.allToolsSet) {
    let answer = prompt(
      `You bank account currently has ${player.bankAccount} $ do you want [c]ut the grass or [b]uy a new tool or would you like to [r]eset the game?`
    );
    switch (answer) {
      case "c":
        useTool();
        break;
      case "b":
        buyTools();
        break;
      case "r":
        resetGame();
        break;
      default:
        console.log("You used invalid option");
        break;
    }
  } else {
    let answer = prompt(
      `Your available tools are ${player.availableTools} and bank account currently has ${player.bankAccount}$. Would you like to use [m]uliple tools, [s]ell a tool or [r]eset the game?`
    );
    let toolsDisplay = [];
    for (let name of player.availableTools) {
      toolsDisplay.push(
        `[${player.availableTools.indexOf(name) + 1}]: ${name} `
      );
    }
    if (answer == "m") {
      let answer = prompt(`Please select your tools to use ${toolsDisplay}`);
      useMultipleTools(answer.split(""));
    } else if (answer == "s") {
      let toolsForSale = [];
      for (let item of tools) {
        if (item.price > 0 && item.available)
          toolsForSale.push(`[${tools.indexOf(item)}]: ${item.name} `);
      }
      if (toolsForSale.length > 0) {
        let answer = prompt(
          `Please select your tools for sale ${toolsForSale}`
        );
        sellTools(answer);
      } else {
        let answer = prompt(
          `You have no tools left, Whould you like to [r]eset the game?`
        );
        answer == "r" ? resetGame() : console.log("See you next time!");
      }
    } else if (answer == "r") {
      answer == "r" ? resetGame() : console.log("See you next time!");
    }
    winPlayer();

    if (player.isWinner) {
      let answer = prompt(`Would you like to [r]eset the game?`);
      answer == "r" ? resetGame() : console.log("See you next time!");
    }
  }
}
