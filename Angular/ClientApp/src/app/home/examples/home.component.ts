import { Component, OnInit, OnChanges, DoCheck, SimpleChanges, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
@Component(
{
  selector: 'app-home',
  templateUrl: './home.component.html'
  })
export class ExampleComponent implements
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
{
  add: boolean = false
  input: string = "Input Message"
  status: string = "Not added"
  text: string
  list = ["one", "two"]
  value = "a"
  constructor()
  {
    setTimeout(() =>
    {
      this.add = true
    }, 2000)
  }
  ngOnInit(): void
  {
    console.log("A lifefycle hook that is called after constructor is called")
  }
  ngOnChanges(changes: SimpleChanges): void
  {
    console.log("A lifecycle hook that is called after and @Input element is changed")
  }
  ngDoCheck(): void
  {
    console.log("A lifecycle hook that is called after any change is detected")
  }
  ngAfterContentInit(): void
  {
    console.log("A lifecycle hook that is called only once when directives are initializated")
  }
  ngAfterContentChecked(): void
  {
    console.log("A lifecycle hook that is called after ngDoCheck")
  }
  ngAfterViewInit(): void
  {
    console.log("A lifecycle hook that is called after Angular has fully initialized a component's view")
  }
  ngAfterViewChecked(): void
  {
    console.log("A lifecycle hook that is called after the default change detector has completed checking a component's view for changes.")
  }
  ngOnDestroy(): void
  {
    console.log("A lifecycle hook that is called when the component is destroyed or reinitialized")
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
  
}
