import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SideNavModule } from 'projects/components/src/lib/side-nav/side-nav.module';
import { TableModule } from 'projects/components/src/lib/table/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TableModule,
    SideNavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
