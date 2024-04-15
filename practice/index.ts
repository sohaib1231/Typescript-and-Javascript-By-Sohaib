import inquirer from "inquirer";
const answer=await inquirer.prompt([ 
  {message:"Please Enter the first number", type: "number",name:"firstNumber"},
{
  message:"Please Enter the second number",type:"number",name:"secondNumber"
},
{
  message:"Please select one of the operater",
  type:"list",
  name:"choices",
  choices:["Addition","Substraction","Multiplication","Division"]
}])
// console.log(answer)
if (answer.choices==="Addition"){
  console.log(answer.firstNumber + answer.secondNumber)
}
else if(answer.choices==="Substraction"){
  console.log(answer.firstNumber - answer.secondNumber)
}
else if(answer.choices==="Multiplication"){
  console.log(answer.firstNumber * answer.secondNumber)
}
else if(answer.choices==="Division"){
  console.log(answer.firstNumber / answer.secondNumber)
}