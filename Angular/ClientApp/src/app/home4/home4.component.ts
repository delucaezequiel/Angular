import { Component, OnInit } from '@angular/core';
import { AccountsService } from './services/accounts.service';
@Component(
{
  selector: 'app-home4',
  templateUrl: './home4.component.html',
  styleUrls: ['./home4.component.css']
})
export class Home4Component implements OnInit
{
  accounts: {name: string, status: string}[] = [];
  // private accountService: AccountsService
  constructor(private accountsService: AccountsService) { } //In this way we do not have to declare account service as a variable. It is automatically declared
  ngOnInit()
  {
    this.accounts = this.accountsService.accounts;
  }
}
