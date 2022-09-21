import {
  _DisposeViewRepeaterStrategy,
  _RecycleViewRepeaterStrategy,
  _VIEW_REPEATER_STRATEGY,
} from '@angular/cdk/collections';
import { CdkTable, CDK_TABLE, CDK_TABLE_TEMPLATE, STICKY_POSITIONING_LISTENER, _CoalescedStyleScheduler, _COALESCED_STYLE_SCHEDULER } from '@angular/cdk/table';
import { ChangeDetectionStrategy, Component, Directive, OnInit, ViewEncapsulation } from '@angular/core';



/**
 * Enables the recycle view repeater strategy, which reduces rendering latency. Not compatible with
 * tables that animate rows.
 */
 @Directive({
  selector: 'lib-table[recycleRows], table[lib-table][recycleRows]',
  providers: [{provide: _VIEW_REPEATER_STRATEGY, useClass: _RecycleViewRepeaterStrategy}],
})
export class RecycleRows {}
@Component({
  selector: 'lib-table, table[lib-table]',
  exportAs: 'lib-table',
  template: CDK_TABLE_TEMPLATE,
  styles: [],
  providers: [
    {provide: CdkTable, useExisting: LibTable},
    {provide: CDK_TABLE, useExisting: LibTable},
    {provide: _COALESCED_STYLE_SCHEDULER, useClass: _CoalescedStyleScheduler},
    {provide: _VIEW_REPEATER_STRATEGY, useClass: _DisposeViewRepeaterStrategy},
    {provide: STICKY_POSITIONING_LISTENER, useValue: null},
  ],
  encapsulation: ViewEncapsulation.None,
  // See note on CdkTable for explanation on why this uses the default change detection strategy.
  // tslint:disable-next-line:validate-decorators
  changeDetection: ChangeDetectionStrategy.Default,
})
export class LibTable<T> extends CdkTable<T> implements OnInit {
   /** Overrides the sticky CSS class set by the `CdkTable`. */
   protected override stickyCssClass = 'myClass';

   /** Overrides the need to add position: sticky on every sticky cell element in `CdkTable`. */
   protected override needsPositionStickyOnElement = false;

   override ngOnInit() {
     super.ngOnInit();


     if (this._isNativeHtmlTable) {
       const tbody = this._elementRef.nativeElement.querySelector('tbody');
       tbody.classList.add('custom_css');
     }
   }

}

