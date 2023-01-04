import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import { SidenavService } from '../services/sidenav.service';

@Directive({
  selector: '[libMouseover]',
})
export class MouseoverDirective implements OnInit {
  collapsed: boolean = false;
  @Input() libMouseover: string = '';

  constructor(private nav: SidenavService, private el: ElementRef) {}

  ngOnInit(): void {}

  @HostListener('mouseover', ['$event'])
  onMouseEnter(e: Event) {
    e.stopPropagation();
    if (this.libMouseover !== this.nav.originalMenu[0].routeLink) {
      this.collapsed = false;
      this.nav.collapseNav(this.collapsed);
    }
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(e: Event) {
    e.stopPropagation();
    if (this.libMouseover !== this.nav.originalMenu[0].routeLink) {
      this.collapsed = true;
      this.nav.collapseNav(this.collapsed);
    }
  }
}
