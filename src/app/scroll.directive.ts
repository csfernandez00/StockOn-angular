import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective {

  constructor() { }

  @HostBinding('class.active-nav') newNav!:boolean;

  @HostListener('window:scroll') onScroll(){
    if(window.scrollY >= 50){
      this.newNav = true
    }else{
      this.newNav = false;
    }
  }

}
