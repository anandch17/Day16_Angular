import { Component,EventEmitter,Output } from '@angular/core';
import { Accounts } from '../../services/account';

@Component({
  selector: 'app-hero',
  standalone:true,
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {

  
 @Output() view = new EventEmitter<void>();

  onViewClick() {
    this.view.emit();   // notify App
  }

  createAccount() {}
}
