import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { INavbarData } from '../utils/helper';


@Injectable({
	providedIn: 'root',
})
export class SidenavService {
	level: number = 0;
	originalMenu: any;
	updatedMenu: any = {};
	pagination: any = [];
	isCollapsed: boolean = false;
	url = '';

	collapsed$ = new BehaviorSubject<boolean>(this.isCollapsed);
	collapsed = this.collapsed$.asObservable();

	workingMenu$ = new BehaviorSubject<any>(this.updatedMenu);
	currentMenu = this.workingMenu$.asObservable();

	treelevel$ = new BehaviorSubject<number>(this.level);
	currentLevel = this.treelevel$.asObservable();

	url$ = new BehaviorSubject<string>(this.url);
	currentUrl = this.url$.asObservable();

	constructor() {}
	setMenu(menu: any) {
		this.originalMenu = [...menu];
		this.pagination.push({
			level: this.pagination?.length,
			menu: this.originalMenu[0],
		});
	}
	addTreeLevel(level: number) {
		level++;
		this.treelevel$.next(level);
	}
	subtractTreeLevel(level: number) {
		level--;
		this.treelevel$.next(level);
	}

	updateMenu(menu: INavbarData) {
		this.pagination.push({
			level: this.pagination?.length,
			menu: menu,
		});

		this.workingMenu$.next(menu);
	}
	back() {
		this.pagination.pop();
		this.workingMenu$.next(this.pagination[this.pagination?.length - 1]?.menu);
    return this.pagination[this.pagination?.length - 1]?.menu;
	}
	getPagination() {
		return this.pagination;
	}
	restoreState(state: any) {
		this.pagination = state?.pagination;
		this.treelevel$.next(state?.level);
		this.workingMenu$.next(state?.menu);
		this.collapsed$.next(true);
	}
	collapseNav(collapse: boolean) {
		this.collapsed$.next(collapse);
	}
	updateSelectedUrl(selected: string) {
		this.url$.next(selected);
	}
}
