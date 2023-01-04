import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SidenavService } from '../services/sidenav.service';
import { INavbarData, INavbarState } from '../utils/helper';

@Component({
  selector: 'lib-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  @Input() termsAndConditionsUrl = '#';
	@Input() sidePanelHeaderHTML = `Business <br> Self-service portal`;
	@Input() menus: any;

	@Input() HOME: string = 'Home';
	@Output() redirectionUrl: EventEmitter<string> = new EventEmitter();
	@Output() logout: EventEmitter<string> = new EventEmitter();
	@Output() currentState: EventEmitter<any> = new EventEmitter();
	@Input() state: any | undefined;
	newMainMenu: any;
	level: number = 0;
	collapsed: boolean = false;
	_url: string = '';
	isMouseOver: boolean | undefined;
	menuItemSelected: boolean = false;

	@Input()
	get url() {
		return this._url;
	}
	set url(value: string) {
		this._url = value;
	}
	constructor(private sidenav: SidenavService) {}

	ngOnInit(): void {
		if (this.state?.level === 0 || this.state?.level === null || this.state?.level === undefined) {
			this.sidenav.setMenu(this.menus);
		} else {
      console.log(this.state);
			this.sidenav.restoreState(this.state);
		}

		this.sidenav.currentMenu.subscribe(menu => (this.newMainMenu = menu));
		this.sidenav.currentLevel.subscribe(level => (this.level = level));
		this.sidenav.collapsed.subscribe(collapsed => (this.collapsed = collapsed));
		this.sidenav.updateSelectedUrl(this.url);
		this.sidenav.currentUrl.subscribe(currentUrl => this.url = currentUrl);
    console.log(this.newMainMenu, this.level );

	}
	getActiveClass(data: INavbarData): string {
		if(this.collapsed) {
			return this.url === data?.routeLink  ? 'side-panel-body-content-link-collapsed-active' : '';
		} else {
			return this.url === data?.routeLink  ? 'side-panel-body-content-link-active' : '';
		}

	}

	selectNav(menu: any) {
		if (menu?.items?.length === 0 || !menu?.items) {
			this.currentState.emit({
				level: this.level,
			});
			this.collapsed = !this.collapsed;
			this.sidenav.collapseNav(this.collapsed);
			this.menuItemSelected = !this.menuItemSelected;
			this.redirectionUrl.emit(menu.routeLink);
			this.sidenav.updateSelectedUrl(this.url);
			return;
		} else {
			this.sidenav.addTreeLevel(this.level);
			this.sidenav.updateMenu(menu);
		}
	}

	back(): void {
		this.sidenav.subtractTreeLevel(this.level);
		this.sidenav.back();
	}
	updateUrl(routeLink: string): void {
		this.redirectionUrl.emit(routeLink);
	}

  updateSideNavState(state: any) {
    this.currentState.emit(state);
  }

	logOut(): void {
		this.logout.emit('logout');
	}
}
