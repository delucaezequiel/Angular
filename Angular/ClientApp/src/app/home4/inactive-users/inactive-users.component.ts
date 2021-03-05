import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
@Component(
{
  selector: 'app-home4-inactive-users',
  templateUrl: './inactive-users.component.html'
  // providers: [LoggingService]
  })
export class InactiveUsersComponent implements OnInit
{
  users: string[];
  constructor(private service: UserService) { }
  ngOnInit()
  {
    this.users = this.service.inactive;
  }
  activate(index: number)
  {
    this.service.activate(index);
  }
}
