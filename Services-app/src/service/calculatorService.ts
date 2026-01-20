import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CalculatorService {
  Add(a:number,b:number):number{
    return a+b;

  }

  Subtract(a:number,b:number):number{
    return a-b;

  }

  Multiply(a:number,b:number):number{
    return a*b;
  }
  Divide(a:number,b:number):number{
    return b!=0? a/b:0;
  }
  
}
