#!  /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import Choices from "inquirer/lib/objects/choices.js";

 // we  will push all the todo's in that array

let toDoList = [];

// while loop condition
let condition = true;

// welcome message
console.log(chalk.yellow("\n\t\t ------Todo list Application------ \t\t\n"));

// In this loop user will ask user  for adding their todos : 
while (condition) {
  let appendTask = await inquirer.prompt([
    {
      name: "appendedTask",
      type: "input",
      message: chalk.blue("insert your task you want  to add  .. \n"),
     
    },
  ]);
   // if user won't add any todos it will print this message 
  if (!appendTask.appendedTask) {
    console.log(
      chalk.redBright(
        "---> Nothing added \nYour todo list is currently empty. Whenever you're ready to add tasks,\nfeel free to extend your todos"
      )
    );
    condition = appendTask.appendedTask;
  
  }else { // if user add or append their task then this message will print and while loop will start from here
    
    // it  will push in array whatever added in todos
    toDoList.push(appendTask.appendedTask);

    console.log(  
    chalk.green(`"${chalk.rgb(56,78,90)(appendTask.appendedTask)}" Your task has been successfully added to the todo list.\n`)
    );
    // show  confirmation message that user wanna add  more todos or not .

    let appemdMoreTask = await inquirer.prompt([ 
      {
        name: "addMore",
        type: "confirm",
        message: chalk.blue("Do you want to add more task ?"),
        default: false,
      },
    ]);

    //if YES then again it will take it to the first query 

    if(condition = appemdMoreTask.addMore){
      
      appendTask.appendedTask;
      
    }else{   // if NO then loop will break here 

     
      console.log(chalk.yellow("\nlist of todo's is here :"));

      // it will print our data separatly line by line
      if (toDoList.length >= 0) {
        toDoList.forEach((list) => {
          console.log(chalk.rgb(222, 173, 237)("\n",list));
        });
      } else {
        console.log(chalk.redBright("Nothing  Add in todo list..."));
      }
      // and our end
      console.log(chalk.cyan("\n\t' list is now structured and finalized accordingly'!\n"));
       

      let ques = await inquirer.prompt(
        {
          name :"confirm",
          type : "confirm",
          message :chalk.green("do you want to modify your list"),
          default : false
        }
      )
      if(condition = ques.confirm){

        let ans = await inquirer.prompt([
        {
          name: "moreOptions",
          type :"list",
          message : chalk.blue("\nwhat kind of operations you want :"),
          choices : ["add more todos","update list","delete task","view list"]
        }
        ])   

        if(ans.moreOptions === "add more todos"){

          appendTask.appendedTask
        
        }
        if(ans.moreOptions === "view list"){
          console.log(chalk.yellow("\nlist of todo's is here :"));
      
          toDoList.forEach((list) => {
          console.log(chalk.rgb(222, 173, 237)("\n",list));
           });
           console.log(chalk.yellow("\n\n\tTHANK YOU!\t\n"));
          break;
        }
          
        if(ans.moreOptions === "update list"){

          let updateTodo = await inquirer.prompt(
            {
              name : "update",
              type : "list",
              message :chalk.blue ("select the item for iteration"),
              choices : toDoList.map((items) => items)

            }
          )
          let addtodo = await inquirer.prompt(
            {
              name : "updatetodo",
              type : "input",
              message : chalk.green("\nupdate your selected item ")
            
            }
          ) 
            let newtodo :any = toDoList.filter(val =>  val !==  updateTodo.update)
            toDoList = [addtodo.updatetodo ,...newtodo]
            console.log(chalk.yellow("\nlist of todo's is here :"));
      
            toDoList.forEach((list) => {
            console.log(chalk.rgb(222, 173, 237)("\n",list));
            });
            console.log(chalk.bold.magenta(`\t\t\n"Your List has been updated"\n`));
          break;
        }
        if(ans.moreOptions === "delete task"){
          let deleteTodo = await inquirer.prompt(
            {
              name : "delete",
              type : "list",
              message : chalk.blue("select the item for deletation"),
              choices : toDoList.map((items) => items)

            }
          )

          let newtodo :any = toDoList.filter(val =>  val !==  deleteTodo.delete)
            toDoList = [...newtodo]
            console.log(chalk.yellow("\nlist of todo's is here :"));
      
          toDoList.forEach((list) => {
          console.log(chalk.rgb(222, 173, 237)("\n",list));
           });
           console.log(chalk.bold.magenta(`\n\t\t"Your task has been deleted"\n`));
           
           break;
        }
        
         
      }
    }
  }
}
    
         
       
                
              
          

