import { DataSource } from '@angular/cdk/collections';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Observable } from 'rxjs/internal/Observable';
import {
  navbarData,
  stateFromClient,
} from '../../projects/components/src/lib/side-nav/utils/nav-data';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'frosted-ui';
  displayedColumns: string[] = [
    'position',
    'name',
    'weight',
    'symbol',
    'delete',
  ];
  dataSource = new ExampleDataSource();
  navbarData = navbarData;
  // stateFromClient = {
  //   level: 0,
  //   mainMenu: {},
  //   pagination: []
  // };
  stateFromClient: any;
  selectedUrl: string = '';
  noCollapse: boolean = false;

  constructor(private router: Router) {
    this.router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        this.selectedUrl = event.url;
        // Your code
        // Use (event.url) to get URL that is being navigated
      }
    });
  }
  ngOnInit(): void {
    this.selectedUrl = window.location.href;
    if (
      this.selectedUrl?.includes('home') ||
      this.selectedUrl?.includes('support')
    ) {
      this.noCollapse = false;
    } else {
      this.noCollapse = true;
    }

    /*  this.router.events.forEach((event) => {
      if (event instanceof NavigationStart) {
        this.selectedUrl = event.url;
        // Your code
        // Use (event.url) to get URL that is being navigated
      }
    }); */
    const state = localStorage.getItem('state') ?? {};
    this.stateFromClient = JSON.parse(state.toString());
  }

  redirectTo(url: string) {
    this.router.navigate([url]);
    this.selectedUrl = url;
    if (url === '/home' || url === '/support') {
      this.noCollapse = false;
    } else {
      this.noCollapse = true;
    }
  }

  updateSideNavState(state: any) {
    localStorage.setItem('state', JSON.stringify(state));
  }
}
/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export class ExampleDataSource extends DataSource<PeriodicElement> {
  /** Stream of data that is provided to the table. */
  data = new BehaviorSubject<PeriodicElement[]>(ELEMENT_DATA);

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<PeriodicElement[]> {
    return this.data;
  }

  disconnect() {}
}
