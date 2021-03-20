import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent'
  @Input() highlightColor: string = 'blue'

  // @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent'  //manually hardcoding default color
  @HostBinding('style.backgroundColor') backgroundColor: string = this.defaultColor


  constructor(private elemRef: ElementRef, private renderer: Renderer2) { }
  
  ngOnInit() {
    // this.renderer.setStyle(this.elemRef.nativeElement, 'background-color', 'blue', false)
  }

  @HostListener('mouseenter') mouseOver(eventData: Event) {
    // this.renderer.setStyle(this.elemRef.nativeElement, 'background-color', 'blue')  //use WITHOUT @HostBinding
    // this.backgroundColor = 'blue'   //use this WITH @HostBinding and HARDCODING color
    this.backgroundColor = this.highlightColor   //use this WITH @HostBinding and input value for default/highlight colors

  }

  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    // this.renderer.setStyle(this.elemRef.nativeElement, 'background-color', 'transparent')  //use WITHOUT @HostBinding
    // this.backgroundColor = 'yellow'    //use this WITH @HostBinding and HARDCODING color
    this.backgroundColor = this.defaultColor   //use this WITH @HostBinding and input value for default/highlight colors
  }
}
