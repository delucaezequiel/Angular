import { Component, EventEmitter, Output} from '@angular/core';
@Component(
{
  selector: 'app-home3-game-control',
  templateUrl: './game-control.component.html'
  })
export class GameControlComponent
{
  @Output() intervalTriggered = new EventEmitter<number>();
  interval;
  counter = 0
  onClickStart()
  {
    this.interval = setInterval(() =>
    {
      this.intervalTriggered.emit(this.counter++);
    }, 1000)
  }
  onClickPause()
  {
    clearInterval(this.interval);
  }
}
