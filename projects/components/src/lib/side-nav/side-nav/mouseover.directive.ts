import { Directive, ElementRef, HostListener } from '@angular/core';
import { SidenavService } from '../services/sidenav.service';

@Directive({
  selector: '[libMouseover]'
})
export class MouseoverDirective {
	collapsed: boolean = false;

  constructor(private nav: SidenavService, private el: ElementRef) { }
  @HostListener('mouseover', ['$event'])
  onMouseEnter(e: Event) {
	e.stopPropagation();
	this.collapsed = false;
	this.nav.collapseNav(this.collapsed);
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(e: Event) {
	e.stopPropagation();
	this.collapsed = true;
	this.nav.collapseNav(this.collapsed);

  }
}
