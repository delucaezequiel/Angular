import { Component, OnInit } from '@angular/core';
@Component(
{
  selector: 'app-home2',
  templateUrl: './home2.component.html'
  })
export class Home2Component
{
  feature: string = 'recipe'
  navigate(feature: string)
  {
    this.feature = feature;
  }
}
