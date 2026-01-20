import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hero } from '../components/hero/hero';
import { Table } from '../components/table/table';
import { ListEmployees } from './employees/list-employees';
import { Accounts } from '../services/account';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,Hero,Table,ListEmployees],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  accounts: any[] = [];
  isLoading = false;

  constructor(private accountService: Accounts) {}

  async loadAccounts() {
    this.isLoading = true;        

    this.accounts = await this.accountService.getAccounts();

    this.isLoading = false;
}
}
