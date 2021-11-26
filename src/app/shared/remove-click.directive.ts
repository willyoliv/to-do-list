import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[RemoveClick]'
})
export class RemoveClickDirective implements OnInit{

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {

  }

  @HostListener('click', ['$event']) onClick($event: Event) {
    $event.preventDefault();
    $event.stopPropagation();
    return false;
  }

}
