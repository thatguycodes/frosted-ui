import {
  CDK_ROW_TEMPLATE,
  CdkFooterRow,
  CdkFooterRowDef,
  CdkHeaderRow,
  CdkHeaderRowDef,
  CdkRow,
  CdkRowDef,
  CdkNoDataRow,
} from '@angular/cdk/table';
import {ChangeDetectionStrategy, Component, Directive, ViewEncapsulation} from '@angular/core';

/**
 * Header row definition for the lib-table.
 * Captures the header row's template and other header properties such as the columns to display.
 */
 @Directive({
  selector: '[libHeaderRowDef]',
  providers: [{provide: CdkHeaderRowDef, useExisting: LibHeaderRowDef}],
  inputs: ['columns: libHeaderRowDef', 'sticky: libHeaderRowDefSticky'],
})
export class LibHeaderRowDef extends CdkHeaderRowDef {}

/**
 * Footer row definition for the lib-table.
 * Captures the footer row's template and other footer properties such as the columns to display.
 */
 @Directive({
  selector: '[libFooterRowDef]',
  providers: [{provide: CdkFooterRowDef, useExisting: LibFooterRowDef}],
  inputs: ['columns: libFooterRowDef', 'sticky: libFooterRowDefSticky'],
})
export class LibFooterRowDef extends CdkFooterRowDef {}

/**
 * Data row definition for the lib-table.
 * Captures the data row's template and other properties such as the columns to display and
 * a when predicate that describes when this row should be used.
 */
 @Directive({
  selector: '[libRowDef]',
  providers: [{provide: CdkRowDef, useExisting: LibRowDef}],
  inputs: ['columns: libRowDefColumns', 'when: libRowDefWhen'],
})
export class LibRowDef<T> extends CdkRowDef<T> {}

/** Footer template container that contains the cell outlet. Adds the right class and role. */
@Component({
  selector: 'lib-header-row, tr[lib-header-row]',
  template: CDK_ROW_TEMPLATE,
  host: {
    'class': 'lib-mdc-header-row mdc-data-table__header-row',
    'role': 'row',
  },
  // See note on CdkTable for explanation on why this uses the default change detection strategy.
  // tslint:disable-next-line:validate-decorators
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.None,
  exportAs: 'libHeaderRow',
  providers: [{provide: CdkHeaderRow, useExisting: LibHeaderRow}],
})
export class LibHeaderRow extends CdkHeaderRow {}

/** Footer template container that contains the cell outlet. Adds the right class and role. */
@Component({
  selector: 'lib-footer-row, tr[lib-footer-row]',
  template: CDK_ROW_TEMPLATE,
  host: {
    'class': 'lib-mdc-footer-row mdc-data-table__row',
    'role': 'row',
  },
  // See note on CdkTable for explanation on why this uses the default change detection strategy.
  // tslint:disable-next-line:validate-decorators
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.None,
  exportAs: 'libFooterRow',
  providers: [{provide: CdkFooterRow, useExisting: LibFooterRow}],
})
export class LibFooterRow extends CdkFooterRow {}

/** Data row template container that contains the cell outlet. Adds the right class and role. */
@Component({
  selector: 'lib-row, tr[lib-row]',
  template: CDK_ROW_TEMPLATE,
  host: {
    'class': 'lib-mdc-row mdc-data-table__row',
    'role': 'row',
  },
  // See note on CdkTable for explanation on why this uses the default change detection strategy.
  // tslint:disable-next-line:validate-decorators
  changeDetection: ChangeDetectionStrategy.Default,
  encapsulation: ViewEncapsulation.None,
  exportAs: 'libRow',
  providers: [{provide: CdkRow, useExisting: LibRow}],
})
export class LibRow extends CdkRow {}

/** Row that can be used to display a message when no data is shown in the table. */
@Directive({
  selector: 'ng-template[libNoDataRow]',
  providers: [{provide: CdkNoDataRow, useExisting: LibNoDataRow}],
})
export class LibNoDataRow extends CdkNoDataRow {
  override _contentClassName = 'lib-mdc-no-data-row';
}
