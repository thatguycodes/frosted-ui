import { Component, EventEmitter, HostListener, Input, OnInit, Output } from '@angular/core';
import { SidenavService } from '../services/sidenav.service';

import { INavbarData } from '../utils/helper';

@Component({
	selector: 'vivid-sublevel-menu',
	template: `
		<ul class="side-panel-body-content"  [ngClass]="collapsed ? 'side-panel-body-content-collapsed' : ''">
			<li
				*ngFor="let menu of _menus"
				class="side-panel-body-content-link"
				(click)="updateMenu(menu)"
				[ngClass]="collapsed ? 'side-panel-body-content-link-collapsed' : ''"
				[ngClass]="getActiveClass(menu)"
				tabindex="0"
			>
				<span>
					<span [innerHTML]="menu?.icon | htmlBypassSecurity" class="side-panel-body-content-link-icon"></span>
					<span class="side-panel-body-content-link-text" *ngIf="!collapsed">{{ menu?.label }}</span>
				</span>
			</li>
		</ul>
	`,
	styleUrls: ['../side-nav/side-nav.component.scss'],
})
export class SubLevelMenuComponent implements OnInit {
	@Output() subMenuUrl: EventEmitter<string> = new EventEmitter();
	@Output() currentState: EventEmitter<any> = new EventEmitter();
	collapsed: boolean = false;
	_menus: any;
	subMenu: any;
	@Input()
	level: number = 1;
	newMainMenu: any;
	@Input()
	get menus() {
		return this._menus;
	}
	set menus(value: any) {
		this._menus = value;
	}
	@Input() url: string = '';

	constructor(private sidenav: SidenavService) {}

	ngOnInit(): void {
		this.sidenav.currentMenu.subscribe(menu => (this.newMainMenu = menu));
		this.sidenav.collapsed.subscribe(collapsed => (this.collapsed = collapsed));
		this.sidenav.currentUrl.subscribe(currentUrl => this.url = currentUrl);
	}
	updateMenu(menu: INavbarData): void {
		if (menu?.items?.length === 0 || !menu?.items) {
			this.subMenuUrl.emit(menu.routeLink);
			this.sidenav.updateSelectedUrl(this.url);
			this.currentState.emit({
				level: this.level,
				menu: this.newMainMenu,
				pagination: this.sidenav.getPagination(),
			});
			this.collapsed = !this.collapsed;
			this.sidenav.collapseNav(this.collapsed);

			return;
		}
		this.sidenav.addTreeLevel(this.level);
		this.sidenav.updateMenu(menu);
	}
	getActiveClass(data: INavbarData): string {
		if(this.collapsed) {
			return this.url === data?.routeLink ? 'side-panel-body-content-link-collapsed-active' : '';
		} else {
			return this.url === data?.routeLink  ? 'side-panel-body-content-link-active' : '';
		}
	}

}
