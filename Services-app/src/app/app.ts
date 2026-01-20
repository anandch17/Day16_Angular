import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Calculator } from '../components/calculator/calculator';
import { MessageComponent } from '../components/message/message';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Calculator,MessageComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Services-app');
}
