#!  /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

let toDoList = [];

let condition = true;

console.log(chalk.yellow("\n\t\t ------Todo list Application------ \t\t\n"));

while (condition) {
  let appendTask = await inquirer.prompt([
    {
      name: "appendedTask",
      type: "input",
      message: chalk.blue("Insert your task you want to add .. \n"),
    },
  ]);

  toDoList.push(appendTask.appendedTask);
  console.log(
    chalk.green(`${appendTask.appendedTask} task added successfully\n`)
  );

  let appemdMoreTask = await inquirer.prompt([
    {
      name: "addMore",
      type: "confirm",
      message: chalk.blue("Do you want to add more task ?"),
      default: "false",
    },
  ]);

  condition = appemdMoreTask.addMore;
}

console.log(chalk.yellow("\nlist of todo's is here :"));

if (toDoList.length >= 0) {
  toDoList.forEach((list) => {
    console.log(list);
  });
} else {
  console.log(chalk.redBright("Nothing  Add in todo list..."));
}

console.log(chalk.magenta("\n\tYour List is Organized !"));
