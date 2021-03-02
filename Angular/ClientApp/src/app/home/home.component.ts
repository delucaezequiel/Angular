import { Component, OnInit } from '@angular/core';
@Component(
{
  selector: 'app-home',
  templateUrl: './home.component.html'
  })
export class HomeComponent implements OnInit
{
  add: boolean = false
  input: string = "Input Message"
  status: string = "Not added"
  text: string
  list = ["one", "two"]
  constructor()
  {
    setTimeout(() =>
    {
      this.add = true
    }, 2000)
  }
  onClick()
  {
    this.status = "Added"
    this.list.push(this.text)
  }
  onInput(event: any)
  {
    this.text = event.target.value
  }
  ngOnInit(): void
  {
    throw new Error('Method not implemented.');
  }
}
