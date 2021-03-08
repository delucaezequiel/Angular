import { Component, EventEmitter, Output } from '@angular/core';
@Component(
{
  selector: 'app-header',
  templateUrl: './header.component.html'
  })
export class HeaderComponent
{
  @Output() choice = new EventEmitter<string>();
  onClick(choice: string)
  {
    this.choice.emit(choice);
  }
}
