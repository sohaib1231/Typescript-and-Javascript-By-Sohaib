#! /usr/bin/env node
import inquire from "inquirer";
let answer = await inquire.prompt([
    { message: "Please enter first number", type: "number", name: "firstNumber" },
    {
        message: "Please enter the second number",
        type: "number",
        name: "secondNumber",
    },
    {
        message: "Please select one of the operater to perform operation",
        type: "list",
        name: "operater",
        choices: ["Addition", "Substraction", "Multiplication", "Division"],
    },
]);
// console.log(answer)
if (answer.operater === "Addition") {
    console.log(answer.firstNumber + answer.secondNumber);
}
else if (answer.operater === "Substraction") {
    console.log(answer.firstNumber - answer.secondNumber);
}
else if (answer.operater === "Multiplication") {
    console.log(answer.firstNumber * answer.secondNumber);
}
else if (answer.operater === "Division") {
    console.log(answer.firstNumber / answer.secondNumber);
}
