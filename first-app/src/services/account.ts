import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Accounts {

  private accountData: any[] = [];

  generateBalance() {
    return Math.floor(Math.random() * (50000 - 10000 + 1)) + 10000;
  }

  async getAccounts() {
    if (this.accountData.length > 0) {
      return this.accountData;
    }

    const res = await fetch('https://mock-api-u9du.onrender.com/accounts');
    const data = await res.json();

    this.accountData = data.map((acc: any) => ({
      ...acc,
      balance: this.generateBalance(),
      transactions: []
    }));

    return this.accountData;
  }
}
