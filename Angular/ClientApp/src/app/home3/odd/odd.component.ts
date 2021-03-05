import { Component, Input} from '@angular/core';
@Component(
{
  selector: 'app-home3-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.css']
})
export class OddComponent
{
  @Input() number: number;
}
