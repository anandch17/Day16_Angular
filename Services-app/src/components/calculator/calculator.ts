import { Component } from '@angular/core';
import { CalculatorService } from '../../service/calculatorService';

@Component({
  selector: 'app-calculator',
  standalone:true,
  templateUrl: './calculator.html',
  styleUrl: './calculator.css',
})
export class Calculator {
   expression = '';      
  currentInput = ''; 

  firstNumber: number | null = null;
  operator: string | null = null;

  constructor(private calc:CalculatorService){}
  pressNumber(num:string):void{
    this.currentInput+=num;
    this.expression+=num;
  }
  pressOperator(op:string):void{
    if (this.currentInput === '') return;

    this.firstNumber=Number(this.currentInput);
    this.operator=op;
  

    this.expression+=`${op}`;
    this.currentInput='';
  }

  calculate():void{
    if (
      this.firstNumber === null ||
      this.operator === null ||
      this.currentInput === ''
    ) return;

    const secondNumber=Number(this.currentInput);
    let result=0;
    switch(this.operator){
      case '+': result =this.calc.Add(this.firstNumber,secondNumber); break;
      case '-': result =this.calc.Subtract(this.firstNumber,secondNumber); break;
      case '*': result =this.calc.Multiply(this.firstNumber,secondNumber); break;
      case '/': result = this.calc.Divide(this.firstNumber, secondNumber); break;
    }

    this.expression = result.toString();
    this.currentInput = result.toString();
    this.firstNumber = null;
    this.operator = null;
  }
  clear():void{
    this.firstNumber=null;
    this.operator=null;
  
     this.expression = '';
    this.currentInput = '';
  }

}
