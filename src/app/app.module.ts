import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SideNavModule } from 'projects/components/src/lib/side-nav/side-nav.module';
import { TableModule } from 'projects/components/src/lib/table/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BillingComponent } from './pages/billing/billing.component';
import { AdministrationComponent } from './pages/administration/administration.component';
import { EndUserManagementgComponent } from './pages/end-user-managementg/end-user-managementg.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SupportComponent } from './pages/support/support.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BillingComponent,
    AdministrationComponent,
    EndUserManagementgComponent,
    SupportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    SideNavModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
