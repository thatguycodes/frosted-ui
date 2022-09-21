import { NgModule } from '@angular/core';
import { RecycleRows, LibTable } from './table.component';
import {CdkTableModule} from '@angular/cdk/table';
import { LibHeaderCellDef, LibColumnDef, LibCellDef, LibFooterCellDef, LibHeaderCell, LibCell, LibFooterCell } from './cell';
import { LibHeaderRowDef, LibRowDef, LibFooterRowDef, LibHeaderRow, LibRow, LibFooterRow, LibNoDataRow } from './row';
import { LibTextColumn } from './text-column';


const EXPORTED_DECLARATIONS = [
  // Table
  LibTable,
  RecycleRows,

  // Template defs
  LibHeaderCellDef,
  LibHeaderRowDef,
  LibColumnDef,
  LibCellDef,
  LibRowDef,
  LibFooterCellDef,
  LibFooterRowDef,

  // Cell directives
  LibHeaderCell,
  LibCell,
  LibFooterCell,

  // Row directives
  LibHeaderRow,
  LibRow,
  LibFooterRow,
  LibNoDataRow,

  LibTextColumn,
];

@NgModule({
  declarations: [
    EXPORTED_DECLARATIONS
  ],
  imports: [
    CdkTableModule
  ],
  exports: [
    EXPORTED_DECLARATIONS
  ]
})
export class TableModule { }
