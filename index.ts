#! /usr/bin/env node 

// SHABANG
import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "enter first number", type: "number", name: "firstNumber" },
  { message: "enter second number",type:"number", name: "secondNumber" },
  {
    message: "select one of the operators to perform action",
    type: "list",
    name: "operator",
    choices: ["Addition", "Subtraction", "Multiplication", "Division"],
  },
]);

//  conditional statementif(your vaue is og("")

if (answer.operator === "Addition") {
    console.log(answer.firstNumber + answer.SecondNumber);
}else if (answer.operator === "Subtraction"){
    console.log(answer.firstNumber - answer.secondNumber);
}else if (answer.operator === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division"){
    console.log(answer.firstNumber / answer.secondNumber);
}else {
    console.log("please select valid operator")
}