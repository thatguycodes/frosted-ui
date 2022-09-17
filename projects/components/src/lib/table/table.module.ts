import { NgModule } from '@angular/core';
import { TableComponent } from './table.component';
import {CdkTableModule} from '@angular/cdk/table';




@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CdkTableModule
  ],
  exports: [
    TableComponent
  ]
})
export class TableModule { }
