import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
@Component(
{
  selector: 'app-home4-active-users',
  templateUrl: './active-users.component.html'
  // providers: [LoggingService]
})
export class ActiveUsersComponent
{
  users: string[];
  constructor(private service: UserService) { }
  ngOnInit()
  {
    this.users = this.service.active;
  }
  deactivate(index: number)
  {
    this.service.deactivate(index);
  }
}
