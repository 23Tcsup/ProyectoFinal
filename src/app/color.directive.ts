import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColor]',
  standalone: true,
})
export class ColorDirective {


  @Input('appColor') color: string = '#ff8411'; 

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'color', this.color);
  }
 }
