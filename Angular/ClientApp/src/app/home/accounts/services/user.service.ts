import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';
@Injectable()
export class UserService
{
  active = ['Juan', 'Cacho'];
  inactive = ['Pepe', 'Lucas']
  constructor(private service: CounterService) { }
  activate(index: number)
  {
    console.log(this.inactive[index]);
    this.active.push(this.inactive[index])
    this.inactive.splice(index, 1)
    this.service.increaseActive()
  }
  deactivate(index: number)
  {
    console.log(this.active[index]);
    this.inactive.push(this.active[index])
    this.active.splice(index, 1)
    this.service.increaseInactive()
  }
}
