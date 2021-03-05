import
{
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  OnInit,
  Renderer2
} from '@angular/core';
@Directive(
{
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit
{
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string;
  private elementRef: ElementRef;
  private renderer: Renderer2
  constructor(elementRef: ElementRef, renderer: Renderer2)
  {
    this.elementRef = elementRef;
    this.renderer = renderer;
  }
  ngOnInit(): void
  {
    /*this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');*/
    this.backgroundColor = this.defaultColor;
  }
  @HostListener('mouseenter') mouseover(event: Event)
  {
    /*this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');*/
    this.backgroundColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(event: Event)
  {
    /*this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');*/
    this.backgroundColor = this.defaultColor;
  }
}
