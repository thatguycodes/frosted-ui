import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HtmlBypassSecurityPipe } from './pipes/html-bypass-security.pipe';
import { SidenavService } from './services/sidenav.service';
import { SubLevelMenuComponent } from './sub-level-menu/sub-level-menu.component';
import { MouseoverDirective } from './side-nav/mouseover.directive';


@NgModule({
  declarations: [
    SideNavComponent,
    HtmlBypassSecurityPipe,
    SubLevelMenuComponent,
    MouseoverDirective,
  ],
  imports: [
    CommonModule
  ],
  providers: [SidenavService],
  exports: [SideNavComponent, HtmlBypassSecurityPipe, SubLevelMenuComponent, MouseoverDirective]
})
export class SideNavModule { }
