import {Directive, Input} from '@angular/core';
import {
  CdkCell,
  CdkCellDef,
  CdkColumnDef,
  CdkFooterCell,
  CdkFooterCellDef,
  CdkHeaderCell,
  CdkHeaderCellDef,
} from '@angular/cdk/table';


/**
 * Cell definition for the lib-table.
 * Captures the template of a column's data row cell as well as cell-specific properties.
 */
 @Directive({
  selector: '[libCellDef]',
  providers: [{provide: CdkCellDef, useExisting: LibCellDef}],
})
export class LibCellDef extends CdkCellDef {}

/**
 * Header cell definition for the lib-table.
 * Captures the template of a column's header cell and as well as cell-specific properties.
 */
 @Directive({
  selector: '[libHeaderCellDef]',
  providers: [{provide: CdkHeaderCellDef, useExisting: LibHeaderCellDef}],
})
export class LibHeaderCellDef extends CdkHeaderCellDef {}

/**
 * Footer cell definition for the lib-table.
 * Captures the template of a column's footer cell and as well as cell-specific properties.
 */
 @Directive({
  selector: '[libFooterCellDef]',
  providers: [{provide: CdkFooterCellDef, useExisting: LibFooterCellDef}],
})
export class LibFooterCellDef extends CdkFooterCellDef {}

/**
 * Column definition for the lib-table.
 * Defines a set of cells available for a table column.
 */
 @Directive({
  selector: '[libColumnDef]',
  inputs: ['sticky'],
  providers: [
    {provide: CdkColumnDef, useExisting: LibColumnDef},
    {provide: 'LIB_SORT_HEADER_COLUMN_DEF', useExisting: LibColumnDef},
  ],
})
export class LibColumnDef extends CdkColumnDef {
  /** Unique name for this column. */
  @Input('libColumnDef')
  override get name(): string {
    return this._name;
  }
  override set name(name: string) {
    this._setNameInput(name);
  }
    /**
   * Add "mat-column-" prefix in addition to "cdk-column-" prefix.
   * In the future, this will only add "mat-column-" and columnCssClassName
   * will change from type string[] to string.
   * @docs-private
   */
     protected override _updateColumnCssClassName() {
      super._updateColumnCssClassName();
      this._columnCssClassName!.push(`lib-column-${this.cssClassFriendlyName}`);
    }
  }

  /** Header cell template container that adds the right classes and role. */
@Directive({
  selector: 'lib-header-cell, th[lib-header-cell]',
  host: {
    'class': 'mat-mdc-header-cell mdc-data-table__header-cell',
    'role': 'columnheader',
  },
})
export class LibHeaderCell extends CdkHeaderCell {}

/** Footer cell template container that adds the right classes and role. */
@Directive({
  selector: 'lib-footer-cell, td[lib-footer-cell]',
  host: {
    'class': 'mat-mdc-footer-cell mdc-data-table__cell',
  },
})
export class LibFooterCell extends CdkFooterCell {}

/** Cell template container that adds the right classes and role. */
@Directive({
  selector: 'lib-cell, td[lib-cell]',
  host: {
    'class': 'lib-mdc-cell mdc-data-table__cell',
  },
})
export class LibCell extends CdkCell {}
