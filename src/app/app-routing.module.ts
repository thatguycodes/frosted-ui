import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministrationComponent } from './pages/administration/administration.component';
import { BillingComponent } from './pages/billing/billing.component';
import { EndUserManagementgComponent } from './pages/end-user-managementg/end-user-managementg.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: '',  pathMatch: 'full', redirectTo: '/home'},
  {path: 'home', component: HomeComponent},
  {path: 'billing', component: BillingComponent},
  {path: 'organisation/administration/add-user', component: AdministrationComponent},
  {path: 'organisation/end-user-management', component: EndUserManagementgComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
