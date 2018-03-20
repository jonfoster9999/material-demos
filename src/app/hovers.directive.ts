import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {
  @HostBinding('style.backgroundColor') backgroundColor: string= 'transparent';
  @HostBinding('style.color') color: string = 'black';
  @HostBinding('style.cursor') cursor: string = 'normal';
  constructor() { }
  @HostListener('mouseenter') mouseEnter() {
    this.backgroundColor = 'red';
    this.color = 'white';
    this.cursor = 'pointer';
  }
  @HostListener('mouseleave') mouseLeave() {
    this.backgroundColor = 'transparent';
    this.color = 'black';
    this.cursor = 'normal';
  }
}
