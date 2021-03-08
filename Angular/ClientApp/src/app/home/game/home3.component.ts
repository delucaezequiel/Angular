import { Component} from '@angular/core';
@Component(
{
  selector: 'app-home3',
  templateUrl: './home3.component.html'
  })
export class Home3Component
{
  even: number[] = [];
  odd: number[] = []
  intervalTriggered(event: number)
  {
    if (event % 2 === 0)
    {
      this.even.push(event);
    }
    else
    {
      this.odd.push(event);
    }
  }
}
