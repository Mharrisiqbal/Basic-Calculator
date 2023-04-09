#! /usr/bin/env node


import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";






import {Sum, multiply, subtract, Divide, Modules} from "./ap.js";
import { log } from "console";




// console.log(Sum(5,5));
// console.log(subtract(6,5));
// console.log(multiply(2,3));
// console.log(Divide(4,2));
// console.log(Modules(11,5));






const welcome = async () => {

    console.log(figlet.textSync("Harris"));
    

const input = await inquirer.prompt([
    {
        type:"number",
        name:"num1",
        massage:"Enter number 1"
    },

    {
        type:"number",
        name:"num2",
        massage:"Enter number 2"
    },
    {
        type:"list",
        name:"Operators",
        massage:"Select Operator",
        choices:["+","-","*","/","%"],
    }
  ])
  if (input.Operator==="+"){
       const result = Sum(input.num1,input.num2);
       console.log(result);
       
  } else if (input.Operators==="-"){
        const result = subtract(input.num1,input.num2);
        console.log(result);
        
  }else if (input.Operators==="*"){
    const result = multiply(input.num1,input.num2);
    console.log(result);
    
  }else if (input.Operators==="/"){
    const result = Divide(input.num1,input.num2);
    console.log(result);
    
  }else if (input.Operators==="%"){
    const result = Modules(input.num1,input.num2)
    console.log(result);
    
  }else {
    console.log("Error");
  }
    
}
await welcome();