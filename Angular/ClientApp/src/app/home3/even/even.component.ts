import { Component, Input} from '@angular/core';
@Component(
{
  selector: 'app-home3-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent
{
  @Input() number: number;
}
