import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private property:string[]=[];


  getData():string[]{
    return this.property;
  }

  addData(p:string):void{
  this.property.push(p);
  }

  
}
