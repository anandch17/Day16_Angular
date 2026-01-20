import { Component } from '@angular/core';
import { MessageService } from '../../service/message-service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';   

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [FormsModule, CommonModule],           
  templateUrl: './message.html'
})
export class MessageComponent {

  message: string = '';
  messages: string[] = [];

  constructor(private messageService: MessageService) {}

  addMessage(): void {
    if (!this.message.trim()) return;
    this.messageService.addData(this.message);
    this.message = '';
  }

  getMessages(): void {
    this.messages = this.messageService.getData();
  }
}
